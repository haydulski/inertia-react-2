<?php

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Models\Book;
use App\Models\Category;

use Inertia\Inertia;

class BooksController extends Controller
{
    public function index()
    {
        $books = BooksResource::collection(Book::all());
        $cats = Category::all();

        return Inertia::render('Books', [
            'books' => $books,
            'categories' => $cats
        ]);
    }
}
