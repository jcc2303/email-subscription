FROM node:15.10-alpine as base

RUN apk add --no-cache python make g++ bind-tools


WORKDIR /usr/local/subscription

COPY package.json ./

RUN npm install --production

FROM node:15.10-alpine

WORKDIR /usr/local/subscription

COPY --from=base /usr/local/subscription .

COPY dist ./
# COPY ./ /src/
# RUN npm run build

EXPOSE 5000

ENV NODE_ENV=production
RUN ls /usr/local/subscription
CMD ["node", "main.js"]
# CMD node dist/main.js
