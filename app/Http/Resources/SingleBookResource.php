<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleBookResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author,
            'summary' => $this->summary,
            'year' => (int) $this->year,
            'category_id' => $this->category_id,
            'picture_id' => $this->picture_id,
            'is_hold' => $this->is_hold,
        ];
    }
}
