<?php

namespace App\Repositories\Snippet;

use App\Models\Snippet;
use App\Repositories\BaseRepository;
use App\Repositories\Snippet\SnippetRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class SnippetRepository extends BaseRepository implements SnippetRepositoryInterface
{
    const PER_PAGE = 10;

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

    public function getForeign()
    {
        return $this->model->with('user', 'img')->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('user', 'img')->first();
    }
}
