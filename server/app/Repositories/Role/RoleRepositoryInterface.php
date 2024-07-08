<?php

namespace App\Repositories\Role;

use App\Repositories\RepositoryInterface;

interface RoleRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteRole($id);
}
