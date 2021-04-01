FROM node:15.10-alpine as base

RUN apk add --no-cache python make g++ bind-tools

WORKDIR /usr/local/api-gateway

COPY package.json ./
# COPY ./ /src/
# RUN apk add --no-cache python make g++ bind-tools
# RUN npm run build

RUN npm install --production
COPY dist ./

FROM node:15.10-alpine

WORKDIR /usr/local/api-gateway

COPY --from=base /usr/local/api-gateway .

EXPOSE 4000

ENV NODE_ENV=production
CMD ["node", "main.js"]
# CMD node dist/main.js
