<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Book extends Model
{
    use HasFactory;

    protected $table = "books";
    protected $fillable = ['title', 'author', 'summary', 'year', 'category_id', 'is_hold'];
    public $timestamps = false;

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'holders')->withTimestamps();
    }
}
