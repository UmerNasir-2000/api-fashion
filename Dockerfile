FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD [ "yarn", "start:prod" ]