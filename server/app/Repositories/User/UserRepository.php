<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    const PER_PAGE = 10;

    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(User $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->with('role')->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('role')->first();
    }

    public function deleteUser($role_id)
    {
        $users = $this->model->where('role_id', $role_id)->first();

        return $this->destroy($users);
    }

    public function checkRole($role_id)
    {
        return $this->model->wheres('role_id', $role_id = 2);
    }
}
