<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{
    public function index()
    {
        return Inertia::render('Books');
    }
}
