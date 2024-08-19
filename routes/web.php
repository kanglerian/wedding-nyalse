<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TemplateController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('setting')->group(function () {
    Route::get('/', [SettingController::class, 'index'])->name('setting');
    Route::resource('category', CategoryController::class);
    Route::resource('template', TemplateController::class);
});

Route::middleware('auth')->group(function () {
    Route::resource('template', TemplateController::class);
    Route::patch('/template/status/{template}', [TemplateController::class, 'status'])->name('template.status');

    Route::resource('user', UserController::class);
    Route::patch('/user/status/{user}', [UserController::class, 'status'])->name('user.status');

    Route::resource('invitation', InvitationController::class);
});

Route::post('/payment/notification', [PaymentController::class, 'handleNotification']);

require __DIR__.'/auth.php';
