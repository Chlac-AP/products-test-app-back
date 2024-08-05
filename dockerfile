FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN apk update && apk upgrade
RUN apk add --no-cache sqlite

RUN npm install

COPY . .

EXPOSE 3000
CMD npx sequelize-cli db:migrate && npm run dev