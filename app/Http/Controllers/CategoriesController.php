<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class CategoriesController extends Controller
{
    public function index(int $id): Response
    {
        $searchBooks = Cache::remember("books_cat_$id", 60 * 60 * 8, function () use ($id) {
            return  BooksResource::collection(Book::where('category_id', $id)->get());
        });

        $catName = Category::find($id);

        if ($catName === null) {
            return redirect()->route('home')->with('error', 'Category do not exists');
        }

        return Inertia::render('Categories', [
            'books' => $searchBooks,
            'category' => $catName->category,
        ]);
    }
}
