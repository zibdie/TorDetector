#Build stage - To build React frontend
FROM node:12 AS builder
WORKDIR /app

ENV REACT_APP_ICON DiPhp
ENV REACT_APP_API_URL "api.php"

COPY ./static_page/ /app/
RUN npm install && npm run build

#Release stage
FROM php:7.2-apache
COPY ./php/ /var/www/html/
COPY --from=builder /app/build/ /var/www/html/

ENV PORT 5000

CMD sed -i "s/80/$PORT/g" /etc/apache2/sites-available/000-default.conf /etc/apache2/ports.conf && docker-php-entrypoint apache2-foreground

EXPOSE 5000 