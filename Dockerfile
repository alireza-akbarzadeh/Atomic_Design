
FROM node:alpine
COPY . /app
WORKDIR ./
CMD yarn start