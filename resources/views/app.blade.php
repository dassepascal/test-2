<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="{{ config('app.description', 'Notre produit vous aide à accomplir plus.') }}">

        <title inertia>{{ config('app.name', 'MonProduit') }}</title>

        <!-- Inertia -->
        @inertiaHead

        <!-- Vite -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="bg-white">
        @inertia
    </body>
</html>
