<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Img extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'img',
    ];

    /**
     * @return HasMany
     */
    public function snippets(): HasMany
    {
        return $this->hasMany(Snippet::class);
    }
}
