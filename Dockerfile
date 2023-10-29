FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
RUN npm install --omit=dev

CMD ["npm", "run", "start"]

EXPOSE 3000

COPY package.json .
COPY bun.lockb .

RUN npm install -g bun
RUN bun install

# Production Stage

COPY src src
COPY tsup.config.ts .
RUN bun run build

# Production Stage
FROM node:20-alpine
WORKDIR /app

# Set environment to production
ENV NODE_ENV production

# Copy necessary files from builder stage
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist
RUN npm install --omit=dev

# Run production command
CMD ["npm", "run", "start"]

EXPOSE 3000