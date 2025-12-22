FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    git unzip zip libzip-dev libpng-dev libonig-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader
# Node + npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install \
    && npm run build


EXPOSE 8080
CMD php -S 0.0.0.0:8080 -t public
