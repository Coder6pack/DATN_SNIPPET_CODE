<?php

namespace App\Repositories\Vote;

use App\Models\Vote;
use App\Repositories\BaseRepository;
use App\Repositories\Vote\VoteRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class VoteRepository extends BaseRepository implements VoteRepositoryInterface
{
    const PER_PAGE = 10;

    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(Vote $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->with('user', 'snippet')->get();
    }

    public function getTypeId($id)
    {
        return $this->model->where('id', '=', $id)->with('user', 'snippet')->first();
    }

    public function deleteVote($user_id, $snippet_id)
    {
        $votes = $this->model->where('user_id', $user_id)->where('snippet_id', $snippet_id)->first();

        return $this->destroy($votes);
    }
}
