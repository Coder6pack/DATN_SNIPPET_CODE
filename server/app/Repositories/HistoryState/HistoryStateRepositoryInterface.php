<?php

namespace App\Repositories\HistoryState;

use App\Repositories\RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface HistoryStateRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function deleteHistoryState($snippet_id);
}
