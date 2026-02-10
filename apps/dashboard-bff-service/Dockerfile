ARG NODE_VERSION=20-alpine

FROM node:${NODE_VERSION} AS builder
RUN apk update
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=dashboard-bff-service --docker


FROM node:${NODE_VERSION} AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/turbo.json ./turbo.json
RUN yarn install --frozen-lockfile


FROM node:${NODE_VERSION} AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build --filter=dashboard-bff-service

FROM node:${NODE_VERSION} AS runner
RUN apk add --no-cache wget
WORKDIR /app
COPY --from=sourcer /app/ .

EXPOSE 3000
CMD [ "node",  "apps/dashboard-bff-service/dist/src/main.js" ]
