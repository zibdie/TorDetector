#Build stage - To build React frontend
FROM node:12 AS builder
WORKDIR /app

ENV REACT_APP_ICON DiNodejs
ENV REACT_APP_API_URL "api"

COPY ./static_page/ /app/
RUN npm install && npm run build

#Release Stage
FROM node:12-alpine
WORKDIR /app
COPY ./js/ .
COPY --from=builder /app/build/ /app/static/
RUN npm install --production

ENV PORT 4005
EXPOSE 4005

CMD node server.js
