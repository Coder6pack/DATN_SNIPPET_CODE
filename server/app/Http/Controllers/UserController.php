<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepositoryInterface;

class UserController extends Controller
{
    public function __construct(
        protected UserRepositoryInterface $userRepository,
    ) {}
    public function index()
    {
        $users = $this->userRepository->getForeign();
        return response()->json([
            'data' =>  $users,
        ]);
    }

    public function detail($id)
    {
        $users = $this->userRepository->getTypeId($id);
        return response()->json([
            'data' =>  $users,
        ]);
    }
}
