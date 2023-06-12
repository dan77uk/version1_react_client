FROM node:13.12.0-alpine AS development

WORKDIR /app

ENV NODE_ENV development

COPY ./package.json /react-app
RUN npm install

COPY . .

CMD ["npm", "start"]