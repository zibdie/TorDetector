#Build stage - To build React frontend
FROM node:12 AS builder
WORKDIR /app

ENV REACT_APP_ICON DiPython
ENV REACT_APP_API_URL "api"

COPY ./static_page/ /app/
RUN npm install && npm run build

#Release stage
FROM python:alpine

WORKDIR /usr/src/app
COPY ./py/requirements.txt ./

#The 'apk add build-base' is for installing gcc (according to https://wiki.alpinelinux.org/wiki/GCC), a requirement for one of the packages
RUN apk add build-base
RUN pip install --no-cache-dir -r requirements.txt
COPY ./py/ ./
COPY --from=builder /app/build/ ./templates/
RUN chmod -R 777 .

#Change these ports as you please
ENV PORT 5000
EXPOSE 5000

CMD [ "python", "./server.py" ]

