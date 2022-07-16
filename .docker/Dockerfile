FROM node:16.13.2-alpine3.15
RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY package*.json .
RUN yarn install
COPY .. .
ENV REACT_APP_API_URL="https://jsonplaceholder.typicode.com"
EXPOSE 3000
CMD ["yarn", "start"]