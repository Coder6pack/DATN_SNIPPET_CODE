<?php

namespace App\Repositories\SnippetTag;

use App\Models\SnippetTag;
use App\Repositories\BaseRepository;
use App\Repositories\SnippetTag\SnippetTagRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class SnippetTagRepository extends BaseRepository implements SnippetTagRepositoryInterface
{
    const PER_PAGE = 10;

    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(SnippetTag $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->with('snippet')->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('snippet')->first();
    }

    public function deleteSnippetTag($snippet_id)
    {
        $snippetTags = $this->model->where('snippet_id', $snippet_id)->first();

        return $this->destroy($snippetTags);
    }
}
