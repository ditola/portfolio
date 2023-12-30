FROM node:18.18.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
ENV NODE_ENV production
ENV MONGO_URL mongodb://mongo:27017/mydb
CMD [ "node", "server.js" ]