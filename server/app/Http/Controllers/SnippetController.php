<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Snippet\SnippetRepositoryInterface;
class SnippetController extends Controller
{
    public function __construct(
        protected SnippetRepositoryInterface $snippetRepository,
    ) {}
    public function index()
    {
        $snippets = $this->snippetRepository->getForeign();
        return response()->json([
            'data' =>  $snippets,
        ]);
    }

    public function detail($id)
    {
        $snippets = $this->snippetRepository->getTypeId($id);
        return response()->json([
            'data' =>  $snippets,
        ]);
    }
}
