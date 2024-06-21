<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Comment\CommentRepositoryInterface;

class CommentController extends Controller
{
    public function __construct(
        protected CommentRepositoryInterface $commentRepository,
    ) {}
    public function index()
    {
        $comments = $this->commentRepository->getForeign();
        return response()->json([
            'data' =>  $comments,
        ]);
    }

    public function detail($id)
    {
        $comments = $this->commentRepository->getTypeId($id);
        return response()->json([
            'data' =>  $comments,
        ]);
    }
}
