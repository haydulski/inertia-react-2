<?php

use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/books', [BooksController::class, 'index'])->name('books');
Route::get('/book/{id}', [BooksController::class, 'show'])->name('book');

Route::get('/categories/{id}', [CategoriesController::class, 'index'])->name('categories');

Auth::routes();
