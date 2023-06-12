FROM node:alpine 

WORKDIR /react-app

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]