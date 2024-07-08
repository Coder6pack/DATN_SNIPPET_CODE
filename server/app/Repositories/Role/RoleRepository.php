<?php

namespace App\Repositories\Role;

use App\Models\Role;
use App\Repositories\BaseRepository;
use App\Repositories\Role\RoleRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;

class RoleRepository extends BaseRepository implements RoleRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(Role $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->first();
    }

    public function deleteRole($id)
    {
        $roles = $this->model->where($id)->first();

        return $this->destroy($roles);
    }
}
