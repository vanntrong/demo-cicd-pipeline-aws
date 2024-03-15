FROM node:14-alpine

WORKDIR /app
COPY package*.json /app
COPY . /app
RUN npm install
CMD npm run start