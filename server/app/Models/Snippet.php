<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Snippet extends Model
{
    use HasFactory, HasUlids;

    protected $fillable = [
        'user_id',
        'snippet_tag_id',
        'title',
        'content',
    ];

    /**
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return HasMany
     */
    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }
     /**
     * @return HasMany
     */
    public function snippet_tags(): HasMany
    {
        return $this->hasMany(SnippetTag::class);
    }

}
