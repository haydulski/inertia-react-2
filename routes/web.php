<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/books', [BooksController::class, 'index'])->name('books');
Route::get('/book/{id}', [BooksController::class, 'show'])->name('book');
Route::post('/book', [BooksController::class, 'hold'])->name('book.hold');

Route::get('/categories/{id}', [CategoriesController::class, 'index'])->name('categories');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [UserController::class, 'index'])->name('dashboard');
    Route::delete('/dashboard/book', [BooksController::class, 'holderDelete'])->name('holder.delete');
});

// Auth routes
Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login']);
Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::post('logout', [LoginController::class, 'logout'])->name('logout');
