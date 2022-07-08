<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $user = User::with('books')->find(Auth::id());
        if (! isset($user)) {
            return redirect()->route('login');
        }

        return Inertia::render('Dashboard', ['user' => $user]);
    }
}
