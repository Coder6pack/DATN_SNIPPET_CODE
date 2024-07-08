<?php

namespace App\Repositories\HistoryState;

use App\Models\HistoryState;
use App\Repositories\BaseRepository;
use App\Repositories\HistoryState\HistoryStateRepositoryInterface;

class HistoryStateRepository extends BaseRepository implements HistoryStateRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(HistoryState $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->with('snippet')->get();
    }

    public function deleteHistoryState($snippet_id)
    {
        $historyState = $this->model->where('snippet_id', $snippet_id)->first();

        return $this->destroy($historyState);
    }
}
