<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class SnippetTag extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'snippet_id',
        'name',
    ];

    /**
     * 
     * @return BelongsTo
     */
    public function snippet(): BelongsTo
    {
        return $this->belongsTo(Snippet::class);
    }
}