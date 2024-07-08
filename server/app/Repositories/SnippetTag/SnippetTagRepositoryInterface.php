<?php

namespace App\Repositories\SnippetTag;

use App\Repositories\RepositoryInterface;

interface SnippetTagRepositoryInterface extends RepositoryInterface
{
    public function getForeign();

    public function getTypeId($id);

    public function deleteSnippetTag($snippet_id);
}
