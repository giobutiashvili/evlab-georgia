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

5. Start the Laravel backend server (in a separate terminal)

```powershell
php artisan serve
```

-   Visit the app at `http://127.0.0.1:8000` (or the URL shown by `php artisan serve`).
-   Vite's hot-reload server runs (default) on `http://localhost:5173`; the Laravel template is configured to use it during development.

**How header/footer are used**

-   The header and footer are global components mounted in `resources/js/App.vue`. You will find the markup in:
    -   `resources/js/Components/Header.vue`
    -   `resources/js/Components/Footer.vue`
-   Because `App.vue` includes `<Header />` and `<Footer />`, they appear on every routed page automatically.

**Router notes**

-   Routes are defined in `resources/js/router/index.js`.
-   Example: the About page route is currently:

```js
{ path: '/about', component: AboutUs }
```

-   If you use a link to `/about` in the header, make sure the router has a matching path. You can also add `alias` or redirects to support both `/about` and `/aboutus`:

```js
{ path: '/about', component: AboutUs, alias: '/aboutus' }
// or
{ path: '/aboutus', redirect: '/about' }
```

**Using the `<slot />` in pages (how to inject page-specific content)**

-   `Home.vue` and other pages may include a `<slot />` to let the parent provide content (for example a hero banner or a special button).
-   `router-view` exposes a slot API so `App.vue` can pass content into the routed component's slot. Example (in `App.vue`):

```vue
<router-view v-slot="{ Component }">
	<component :is="Component">
		<!-- This content gets inserted into the routed component's default slot -->
		<div class="p-3" style="background:#f8f9fa;">
			<button class="btn btn-primary">Injected slot button</button>
		</div>
	</component>
</router-view>
```

-   Alternatively, for simple values (background class, button text) prefer route `props`:

```js
// router/index.js
{ path: '/', component: Home, props: { bgClass: 'bg-warning', buttonText: 'Buy now' } }

// Home.vue
<script setup>
const props = defineProps(['bgClass', 'buttonText']);
</script>
<template>
	<main :class="['container py-4', bgClass]">
		<button class="btn btn-primary">{{ buttonText }}</button>
	</main>
</template>
```

**Styling**

-   Tailwind is configured and imported via `resources/css/app.css` which contains the Tailwind directives.
-   Bootstrap 5 is imported in `resources/js/app.js` as `import 'bootstrap/dist/css/bootstrap.min.css'` and the JS bundle is included as well. Both are available for components.

**Common Issues & Troubleshooting**

-   "Failed to resolve import": check relative import paths (e.g. `../Pages/Home.vue` vs `./Pages/Home.vue`) and run `npm install`.
-   If HMR assets aren't updating, stop and restart `npm run dev`.

**Build for production**

```powershell
npm run build
php artisan migrate --force
# Serve your Laravel app normally (configure web server like nginx)
```

**Extras / Notes**

-   The repository contains Tailwind + Bootstrap; you can remove one if you want a single styling system.
-   Consider using named routes and `:to` with `{ name: 'about' }` to avoid hard-coded paths.

If you'd like, I can:

-   add route `alias` for `/aboutus`,
-   update `App.vue` to inject per-route slot content examples, or
-   create a short CONTRIBUTING section with recommended dev workflow.

---

Created by your assistant — tell me which additional items you want added to this README.
