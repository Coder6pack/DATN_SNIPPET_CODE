<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Snippet extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'img_id',
        'tilte',
        'content',
    ];

    /**
     * @return HasMany
     */
    public function paginations(): HasMany
    {
        return $this->hasMany(Pagination::class);
    }

    /**
     * 
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * 
     * @return BelongsTo
     */
    public function img(): BelongsTo
    {
        return $this->belongsTo(Img::class);
    }

     /**
     * 
     * @return BelongsTo
     */
    public function snippet_tag(): BelongsTo
    {
        return $this->belongsTo(SnippetTag::class);
    }

     /**
     * @return HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

     /**
     * @return HasMany
     */
    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }
}
