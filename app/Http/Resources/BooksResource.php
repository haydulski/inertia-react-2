<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BooksResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'summary' => substr($this->summary, 0, 80).'...',
            'year' => (int) $this->year,
            'category_id' => $this->category_id,
            'picture_id' => $this->picture_id,
        ];
    }
}
