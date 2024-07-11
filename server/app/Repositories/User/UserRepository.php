<?php

namespace App\Repositories\User;

use App\Models\User;
use App\Repositories\BaseRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

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
        return  $this->model->with('role', 'img')->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('role')->first();
    }

    public function deleteUser($role_id, $img_id)
    {
        $users = $this->model->where('role_id', $role_id)->where('img_id', $img_id)->first();

        return $this->destroy($users);
    }

    public function create($data)
    {
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }
        $data['role_id'] = 2;

        return $this->model->create($data);
    }
}
