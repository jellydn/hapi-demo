import { Server } from "@hapi/hapi";
import Joi from "joi";
import JWT from "jsonwebtoken";

export function routes(server: Server) {
  // Index route
  server.route({
    method: "GET",
    path: "/",
    options: {
      tags: ["api"],
      auth: false,
      description: "Index route",
      handler: (request, h) => {
        h.state("hello", "hapi");
        request.logger.info("In handler %s", request.path);

        return {
          message: "Hello World!",
        };
      },
    },
  });

  // Hello route base on cookie
  server.route({
    method: "GET",
    path: "/hello",
    options: {
      tags: ["api"],
      auth: false,
      handler: (request, h) => {
        const helloMsg = request.state.hello;
        request.logger.info("In handler %s", request.path);
        return {
          message: `Hello ${helloMsg ?? "IT Man"}`,
        };
      },
    },
  });

  // Login route
  server.route({
    method: "POST",
    path: "/login",
    options: {
      tags: ["api"],
      auth: false,
      validate: {
        payload: Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        }),
      },
      handler: (request, h) => {
        request.logger.info("In handler %s", request.path);
        const { username, password } = request.payload as {
          username: string;
          password: string;
        };
        // Check if username and password match
        if (username !== "admin" || password !== "admin") {
          return h
            .response({ message: "Invalid username or password" })
            .code(401);
        }

        // Create JWT token
        const secret = process.env.JWT_SECRET ?? "YOUR_SECRET_KEY";
        const token = JWT.sign(
          {
            username,
          },
          secret
        );

        return {
          message: "Login successful",
          token: token,
        };
      },
    },
  });

  server.route({
    method: "POST",
    path: "/todo",
    options: {
      auth: "jwt",
      tags: ["api"],
      description: "Create todo",
      validate: {
        payload: Joi.object({
          title: Joi.string().required().min(5).messages({
            message: "Title should be at least 5 characters long",
          }),
          description: Joi.string().required(),
          done: Joi.boolean().default(false),
        }),
      },
      handler: (request, h) => {
        const payload = request.payload as any;
        request.logger.info("In handler %s", request.path);
        return {
          message: "Todo created",
          data: payload,
        };
      },
    },
  });
}
