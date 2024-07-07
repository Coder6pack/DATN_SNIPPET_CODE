<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Pagination extends Model
{
    use HasFactory, HasUlids;
    protected $fillable = [
        'pageName',
        'snippet_id',
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
