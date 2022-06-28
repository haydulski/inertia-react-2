<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Book::class;

    public function definition()
    {
        return [
            'title' => fake()->sentence($nbWords = 2, $variableNbWords = true),
            'author' => fake()->name(),
            'summary' => fake()->paragraph(1, true),
            'year' => fake()->year($max = 'now'),
            'category_id' => fake()->numberBetween(1, 8)

        ];
    }
}
