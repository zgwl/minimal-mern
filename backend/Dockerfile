FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
EXPOSE 5050
CMD [ "node", "dist/src/server.js" ] 
