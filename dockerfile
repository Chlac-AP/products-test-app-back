FROM node:lts-alpine

WORKDIR /usr/src/app

COPY .sequelizerc .
COPY tsconfig.json .
COPY package*.json .

RUN apk update && apk upgrade
RUN apk add --no-cache sqlite

RUN npm install

COPY src src


EXPOSE 3000
CMD npx sequelize-cli db:migrate & npm run dev