# Base PHP image
FROM php:8.1-fpm

# System dependencies
RUN apt-get update && apt-get install -y \
    git unzip zip libzip-dev libpng-dev libonig-dev curl \
    && docker-php-ext-install pdo pdo_mysql mbstring zip

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install Node.js & npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node dependencies and build frontend assets
RUN npm install --legacy-peer-deps
RUN npm run build

# Expose port
EXPOSE 8080

# Start PHP server (for development; for production use PHP-FPM + Nginx)
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
