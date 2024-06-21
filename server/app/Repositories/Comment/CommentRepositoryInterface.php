<?php

namespace App\Repositories\Comment;

use App\Repositories\RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface CommentRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);
}
