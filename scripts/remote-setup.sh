#!/usr/bin/env bash
set -e

# Remote initial setup script for Ubuntu/Debian servers.
# Run this once as a deploy user with sudo privileges.

APP_PATH="/var/www/realway"

echo "Creating app directories..."
sudo mkdir -p ${APP_PATH}
sudo chown -R $USER:$USER ${APP_PATH}

echo "Installing PHP extensions and tools (assumes apt)..."
sudo apt update
sudo apt install -y nginx git unzip curl build-essential php8.2 php8.2-fpm php8.2-mbstring php8.2-xml php8.2-bcmath php8.2-mysql php8.2-zip php8.2-curl nodejs npm

echo "Install Composer..."
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

echo "Create nginx site and reload (edit file at /etc/nginx/sites-available/realway.conf)"
sudo ln -sf ${APP_PATH}/deploy/nginx.realway.conf /etc/nginx/sites-available/realway.conf
sudo ln -sf /etc/nginx/sites-available/realway.conf /etc/nginx/sites-enabled/realway.conf
sudo nginx -t
sudo systemctl reload nginx

echo "Set up web user permissions"
sudo chown -R www-data:www-data ${APP_PATH}
sudo chmod -R 775 ${APP_PATH}/storage
sudo chmod -R 775 ${APP_PATH}/bootstrap/cache

echo "Done. Next: clone repo into ${APP_PATH}, configure .env, and run composer install + artisan migrate."
