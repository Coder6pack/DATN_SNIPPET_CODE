<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'name',
    ];

    /**
     * @return HasMany
     */
    public function snippets(): HasMany
    {
        return $this->hasMany(Snippet::class);
    }
}