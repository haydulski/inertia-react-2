<?php

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Http\Resources\SingleBookResource;
use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
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

    public function holderDelete(Request $req): RedirectResponse
    {
        try {
            $user = User::find(Auth::id());
            $validated = $req->validate([
                'bookId' => 'required|int',
            ]);
            $user->books()->detach($validated['bookId']);

            return redirect()->route('dashboard')->with('success', 'Book was given back');
        } catch (\Throwable $th) {

            return redirect()->route('dashboard')->with('error', 'Something went wrong');
        }
    }
}
