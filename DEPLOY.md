# Deployment checklist — realway.com

This document describes how to deploy the Laravel app to a Linux production server (Ubuntu/Debian) and how to configure the CI/CD (GitHub Actions) workflow included in this repository.

1. Server requirements

-   Ubuntu 20.04+ or Debian
-   nginx
-   php 8.1+ with: pdo_mysql, mbstring, bcmath, xml, curl, zip
-   php-fpm
-   mysql or managed DB server
-   git, composer
-   node & npm (if building frontend on server)

2. GitHub Secrets required (repository settings → Secrets)

-   SSH_HOST — IP or hostname of your server
-   SSH_PORT — usually 22
-   SSH_USER — deploy user
-   SSH_PRIVATE_KEY — private key (no passphrase recommended) used to SSH into server
-   SSH_PASSPHRASE — optional passphrase
-   DEPLOY_PATH — e.g. /var/www/realway

3. How the included workflow works

-   On push to `master`, GitHub Actions will now perform an atomic release deploy:
    -   checkout code in CI
    -   build PHP and Node artifacts (composer, npm, and assets)
    -   create a release tarball (excluding .git, node_modules, storage and .env files)
    -   upload the tarball to the server via SCP
    -   on the server: extract into a timestamped `releases/<timestamp>` directory, link shared files (`.env` and storage), run `composer install` (if available), run migrations in maintenance mode, and switch the `current` symlink to the new release
    -   the workflow keeps the last 5 releases for quick rollback

This atomic flow is safer than an in-place `git pull` because it is atomic (switches a symlink) and provides an easy rollback path.

4. Initial server setup (one-time)

-   SSH to server and run the `scripts/remote-setup.sh` (adjust as needed) or follow the manual commands below.
-   Ensure the deploy layout exists and is writable by the `www-data` user and that nginx is configured to point to `DEPLOY_PATH/current/public` or similar.

Manual commands to prepare deploy layout:

```bash
sudo mkdir -p /var/www/realway/releases
sudo mkdir -p /var/www/realway/shared/storage
sudo chown -R deploy:www-data /var/www/realway
sudo chmod -R 775 /var/www/realway
```

5. .env management

-   Do NOT store production secrets in the repo. Use the `.env.production.example` as a template.
-   On the server, create a `.env` from the example and fill in real credentials:

    cp .env.production.example .env

    # edit .env and set DB_PASSWORD, APP_KEY (or run php artisan key:generate)

-   If your database is managed by Railway (or any provider that gives a single connection URL), you can set the `DATABASE_URL` variable instead of the DB_HOST/DB_USERNAME/DB_PASSWORD fields. Laravel will use `DATABASE_URL` if present.

    # Example (replace secret values; DO NOT commit this):

    # DATABASE_URL=mysql://root:YOUR_PASSWORD@turntable.proxy.rlwy.net:41725/railway

    # If you prefer, you can also set the traditional variables instead:

    # DB_CONNECTION=mysql

    # DB_HOST=turntable.proxy.rlwy.net

    # DB_PORT=41725

    # DB_DATABASE=railway

    # DB_USERNAME=root

    # DB_PASSWORD=YOUR_PASSWORD

6. Post-deploy checks

-   Visit https://realway.com and verify the app loads.
-   Confirm images are served from `/storage/`. If not, ensure `/var/www/realway/shared/storage` exists and that `public/storage` points to it; run `php artisan storage:link` if needed.
-   Check `php artisan migrate:status` and logs in `storage/logs`.

7. Manual rollback

-   On the server you can run the included rollback helper to switch to the previous release:

```bash
cd /var/www/realway
./deploy/rollback.sh /var/www/realway
```

This will update the `current` symlink to the previous release. You may then reload php-fpm/nginx if necessary.

7. Optional: Supervisor for queues

-   If using queues (QUEUE_CONNECTION=database or redis), install `supervisor` and create a config to run `php artisan queue:work --sleep=3 --tries=3` as `www-data` or another service user.

If you'd like, I can:

-   Add automatic healthchecks and rollback on failure into the workflow.
-   Add `supervisor` config and Let's Encrypt automation.
-   Run the GitHub Actions steps here (if you provide server access/secrets) to perform an initial deploy.
