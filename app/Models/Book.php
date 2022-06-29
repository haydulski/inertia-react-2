<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;


    protected $table = "books";
    protected $fillable = ['title', 'author', 'summary', 'year', 'category_id', 'is_hold'];
    public $timestamps = false;
}
