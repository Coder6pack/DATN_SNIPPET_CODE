<?php

namespace App\Repositories\User;

use App\Repositories\RepositoryInterface;

interface UserRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteUser($role_id, $img_id);
}
