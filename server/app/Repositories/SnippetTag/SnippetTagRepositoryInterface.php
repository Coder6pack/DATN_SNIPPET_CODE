<?php

namespace App\Repositories\SnippetTag;

use App\Repositories\RepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface SnippetTagRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteSnippetTag($snippetTags);
}
