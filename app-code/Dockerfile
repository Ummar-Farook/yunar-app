FROM node:13.5.0

WORKDIR /code

ADD package.json package-lock.json /code/

RUN npm install --production --silent

ADD index.js .

ENTRYPOINT node index.js
