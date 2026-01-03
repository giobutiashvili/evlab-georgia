# EvLab — Laravel + Vue (Vite) Starter

A small Laravel project using Vue 3 (Vite), Vue Router and Bootstrap 5 for the frontend. This README explains what's included and how to get the project running locally.

**Tech Stack**

-   **Backend:** Laravel (PHP)
-   **Frontend build:** Vite
-   **Frontend framework:** Vue 3
-   **Routing:** Vue Router 4
-   **CSS:** Tailwind CSS + Bootstrap 5
-   **Other:** Axios, `@inertiajs/vue3` (present in package.json)

**Project Structure (relevant files)**

-   **Backend entry:** `artisan`, `routes/web.php`, `app/Http/Controllers`
-   **Frontend entry:** `resources/js/app.js`
-   **Pages:** `resources/js/Pages/` (e.g. `Home.vue`, `AboutUs.vue`, `Contact.vue`)
-   **Shared components:** `resources/js/Components/Header.vue`, `resources/js/Components/Footer.vue`
-   **Router:** `resources/js/router/index.js`
-   **Styles:** `resources/css/app.css` (Tailwind directives) and Bootstrap imported in `resources/js/app.js`

**Quick Setup (developer machine)**

1. Install PHP dependencies

```powershell
composer install
```

2. Copy `.env` and generate app key

```powershell
cp .env.example .env
php artisan key:generate
```

3. (Optional) Run migrations / seeders

```powershell
php artisan migrate --seed
```

4. Install Node dependencies and start the frontend dev server

```powershell
npm install
npm run dev
```

# EvLab — Laravel + Vue (Vite)

Short project README with focused setup and developer notes.

## Tech stack

-   Backend: Laravel 10 (PHP 8.2+)
-   Frontend: Vue 3, Vite
-   Routing: Vue Router
-   Styling: Bootstrap 5 (project also contains Tailwind configuration)
-   HTTP client: Axios

## Prerequisites

-   PHP 8.2+
-   Composer
-   Node.js 18+ and npm
-   (Optional) MySQL or other database supported by Laravel

## Quick setup (local development)

1. Clone the repo and cd into it.
2. Install PHP dependencies:

```bash
composer install
```

3. Copy `.env` and generate an app key:

```bash
cp .env.example .env
php artisan key:generate
```

4. Create the database and run migrations/seeders (if you use a database):

```bash
php artisan migrate --seed
```

5. Install frontend dependencies and run the Vite dev server:

```bash
npm install
npm run dev
```

6. Start the Laravel backend (in a separate terminal):

```bash
php artisan serve
```

Visit `http://127.0.0.1:8000` and Vite HMR will be active during development.

## Build for production

```bash
npm run build
# then deploy your Laravel app and serve via nginx / php-fpm
```

## Running tests

```bash
./vendor/bin/phpunit
```

## Project layout (quick)

-   `app/` — Laravel backend code (controllers, models, middleware)
-   `routes/` — Laravel routes (`web.php`, `api.php`)
-   `resources/js/` — Vue application source (components, pages, router)
-   `resources/css/` — CSS (Tailwind directives and custom CSS)
-   `resources/views/` — Blade views used by Laravel
-   `public/` — public assets and Vite build output

Key frontend files:

-   `resources/js/App.vue` — app shell
-   `resources/js/router/index.js` — vue-router config
-   `resources/js/Pages/` — page components (Home, AboutUs, Products, etc.)
-   `resources/js/Components/Front/Header.vue` — header/navbar

Key backend files:

-   `app/Http/Controllers/` — controllers
-   `app/Models/` — Eloquent models

## Internationalization / language switcher

This project does not include a production-ready localization system by default. Two common approaches are:

-   Server-side (recommended for mixed Blade + SPA apps): add translation files under `resources/lang/<locale>/`, a small `config/locales.php` listing available locales, a `LocaleController` + `routes/locale.php` endpoint to switch the session locale, and a `SetLocale` middleware to call `app()->setLocale()` on each request.
-   Client-side (SPA-only): use `vue-i18n` and store the chosen locale in `localStorage` (instant switching, no server roundtrip).

If you'd like, I can add the server-side option (controller, middleware, route, example translations) or integrate `vue-i18n` on the frontend — tell me which approach you prefer.

## Common developer tasks / troubleshooting

-   If imports fail, ensure `npm install` completed and check import paths.
-   If Vite HMR doesn't refresh, restart `npm run dev` and clear browser cache.
-   When adding new assets or compiled CSS, rebuild with `npm run build`.

## Contributing / workflow

-   Use feature branches and open PRs for review.
-   Run `composer test` or `./vendor/bin/phpunit` before merging backend changes.
-   Keep frontend changes small and test with `npm run dev`.

---

If you want, I can now:

-   add a server-side locale implementation (controller + middleware + config + example translations),
-   or integrate `vue-i18n` for SPA translations and update `Header.vue` to use it.

Tell me which one to implement and I'll add the code and update this README with exact usage instructions.
