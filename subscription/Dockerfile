FROM node:15.10-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 3000

RUN npm install --production
COPY . .
RUN npm run build

ENV NODE_ENV=production
CMD node dist/main.js

