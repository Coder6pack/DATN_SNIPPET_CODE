<?php

namespace App\Repositories\Snippet;

use App\Repositories\RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface SnippetRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);
}
