<?php

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Http\Resources\SingleBookResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class BooksController extends Controller
{
    public function index()
    {

        $books = Cache::remember("all_books", 60 * 60 * 8, function () {
            return  BooksResource::collection(Book::all());
        });

        $cats = Category::all();

        return Inertia::render('Books', [
            'books' => $books,
            'categories' => $cats
        ]);
    }

    public function show(int $id)
    {
        $findBook = Book::find($id);
        if ($findBook === null) return back()->with('error', 'Book with that id was not find');
        $book = new SingleBookResource($findBook);

        return Inertia::render('SingleBook', ['bookData' => $book]);
    }
}
