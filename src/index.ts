import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import "dotenv/config";
import JwtAuth from "hapi-auth-jwt2";
import Pino from "hapi-pino";
import HapiSwagger from "hapi-swagger";

import { routes } from "./routes";

const main = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.SERVER_HOSTNAME ?? "0.0.0.0",
  });

  // Add logger
  await server.register({
    plugin: Pino,
    options: {
      // Redact Authorization headers, see https://getpino.io/#/docs/redaction
      redact: ["req.headers.authorization"],
    },
  });

  await server.register(JwtAuth);

  // Add JWT auth
  server.auth.strategy("jwt", "jwt", {
    key: process.env.JWT_SECRET ?? "YOUR_SECRET_KEY",
    validate: (decoded, request, h) => {
      request.logger.info("In validate %s", request.path);
      request.logger.info(decoded);
      // TODO: Add validation here
      return { isValid: true };
    },
  });
  server.auth.default("jwt");

  // Setup swagger
  const swaggerOptions = {
    info: {
      title: "Hapi API Documentation",
      version: "0.0.1",
    },
    securityDefinitions: {
      jwt: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [{ jwt: [] }],
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  // Load routes
  routes(server);

  await server.start();
  server.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

main();
