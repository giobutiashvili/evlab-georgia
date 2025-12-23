# Base PHP image
FROM php:8.1-fpm

# System dependencies
RUN apt-get update && apt-get install -y \
    git unzip zip libzip-dev libpng-dev libonig-dev curl \
    && docker-php-ext-install pdo pdo_mysql mbstring zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install Node.js & npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /var/www/html

# Copy only dependency files first for better caching
COPY composer.json composer.lock ./
COPY package.json package-lock.json ./

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --prefer-dist

# Install Node dependencies
RUN npm ci --legacy-peer-deps

# Copy remaining project files
COPY . .

# Expose port
EXPOSE 8080

# Start PHP server (for development)
CMD ["php", "-S", "0.0.0.0:8080", "-t", "public"]
