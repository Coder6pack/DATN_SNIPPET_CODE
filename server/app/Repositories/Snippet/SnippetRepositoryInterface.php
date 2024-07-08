<?php

namespace App\Repositories\Snippet;

use App\Repositories\RepositoryInterface;

interface SnippetRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteSnippet($user_id);
}
