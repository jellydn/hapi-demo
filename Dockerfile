FROM node:20

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN npm install -g bun
RUN bun install

COPY src src
COPY tsup.config.ts .
RUN bun run build

ENV NODE_ENV production
CMD ["npm", "run", "start:prod"]

EXPOSE 3000