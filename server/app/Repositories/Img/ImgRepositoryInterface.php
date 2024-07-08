<?php

namespace App\Repositories\Img;

use App\Repositories\RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface ImgRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function deleteImg($id);
}
