FROM node:15.10-alpine as base

RUN apk add --no-cache python make g++ bind-tools

WORKDIR /usr/local/emailer

COPY package.json ./

RUN npm install --production

FROM node:15.10-alpine

WORKDIR /usr/local/emailer

COPY --from=base /usr/local/emailer .

COPY dist ./
# COPY ./ /src/
# RUN npm run build
EXPOSE 6000

ENV NODE_ENV=production
CMD ["node", "main.js"]
# CMD node dist/main.js
