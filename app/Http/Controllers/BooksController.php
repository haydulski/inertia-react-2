<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\BooksResource;
use App\Http\Resources\SingleBookResource;
use App\Models\Book;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class BooksController extends Controller
{
    public function index(): Response
    {
        $books = Cache::remember('all_books', 60 * 60 * 8, function () {
            return  BooksResource::collection(Book::all());
        });

        $cats = Category::all();

        return Inertia::render('Books', [
            'books' => $books,
            'categories' => $cats,
        ]);
    }

    public function show(int $id): Response
    {
        $findBook = Book::find($id);
        if ($findBook === null) {
            return back()->with('error', 'Book with that id was not find');
        }
        $book = new SingleBookResource($findBook);

        return Inertia::render('SingleBook', ['bookData' => $book]);
    }

    public function hold(Request $req): RedirectResponse
    {
        $userId = Auth::id();
        if ($userId === null) {
            return back()->with('error', 'You are not loged in');
        }

        $user = user::find($userId);
        $validated = $req->validate(
            ['bookId' => 'required|int']
        );

        $user->books()->attach($validated['bookId']);
        Book::find($validated['bookId'])->update(['is_hold' => 1]);

        return redirect()->route('book', ['id' => $validated['bookId']])->with('success', 'Book added to your private list');
    }

    public function holderDelete(Request $req): RedirectResponse
    {
        try {
            $user = User::find(Auth::id());
            $validated = $req->validate([
                'bookId' => 'required|int',
            ]);
            $user->books()->detach($validated['bookId']);
            Book::find($validated['bookId'])->update(['is_hold' => 0]);

            return redirect()->route('dashboard')->with('success', 'Book was given back');
        } catch (\Throwable $th) {
            return redirect()->route('dashboard')->with('error', 'Something went wrong');
        }
    }
}
