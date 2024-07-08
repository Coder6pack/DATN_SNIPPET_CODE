<?php

namespace App\Repositories\Snippet;

use App\Models\Snippet;
use App\Repositories\BaseRepository;
use App\Repositories\Snippet\SnippetRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;

class SnippetRepository extends BaseRepository implements SnippetRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(Snippet $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign($page = 1, $per_page = 5)
    {
        return $this->model->with('user')->take($per_page)->skip($per_page * ($page - 1))->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('user')->first();
    }

    public function deleteSnippet($user_id)
    {
        $snippets = $this->model->where('user_id', $user_id)->first();

        return $this->destroy($snippets);
    }
}
