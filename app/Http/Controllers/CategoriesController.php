<?php

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    public function index(int $id)
    {
        $searchBooks = Cache::remember("books_cat_$id", 60 * 60 * 8, function () use ($id) {
            return  BooksResource::collection(Book::where('category_id', $id)->get());
        });

        $catName = Category::find($id);

        if ($catName === null) return redirect()->route('home')->with('error', 'Category do not exists');

        return Inertia::render('Categories', [
            'books' => $searchBooks,
            'category' => $catName->category
        ]);
    }
}
