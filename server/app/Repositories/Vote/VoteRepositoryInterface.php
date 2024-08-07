<?php

namespace App\Repositories\Vote;

use App\Repositories\RepositoryInterface;

interface VoteRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteVote($user_id, $snippet_id);
}
