FROM node:16.13.2-alpine3.15
WORKDIR /app
COPY . .
RUN yarn install
ENV REACT_APP_API_URL="https://jsonplaceholder.typicode.com"