<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LandingController::class, 'index'])->name('landing');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');
