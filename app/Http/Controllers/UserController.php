<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $user = User::with('books')->find(Auth::id());
        if (!isset($user)) return redirect()->route('login');

        return Inertia::render('Dashboard', ['user' => $user]);
    }
}
