FROM node:latest

WORKDIR /app
COPY package.json /app
RUN yarn install

ADD src /app/src
ADD public /app/public

CMD ["yarn", "start"]