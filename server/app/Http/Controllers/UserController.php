<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\User\UserRepositoryInterface;

class UserController extends Controller
{
    public function __construct(
        protected UserRepositoryInterface $userRepository,
    ) {
    }
    public function index()
    {
        $users = $this->userRepository->getForeign();
        return response()->json([
            'data' => $users,
        ]);
    }

    public function detail($id)
    {
        $users = $this->userRepository->getTypeId($id);
        return response()->json([
            'data' => $users,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'phone' => 'required',
                'password' => 'required|string|min:8',
                'job' => 'required|string',
                'state' => 'required',
                'google_id' => 'required',
                'role_id' => 'required',
                'profile' => 'required',
                'lastLogin' => 'required',
            ]);

            $user = $this->userRepository->create($validatedData);

            return response()->json([
                'data' => $user,
                'message' => "Thêm mới thành công",
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => "Thêm mới thất bại",
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Thêm mới thất bại",
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function edit(Request $request, $id)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'required',
                'password' => 'required|string|min:8',
                'job' => 'required|string',
                'state' => 'required',
                'google_id' => 'required',
                'role_id' => 'required',
                'profile' => 'required',
                'lastLogin' => 'required',
            ]);

            $users = $this->userRepository->update($id, $validatedData);

            return response()->json([
                'data' => $users,
                'message' => "Chỉnh sửa thành công",
            ], 201);
        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => "Chỉnh sửa thất bại",
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Chỉnh sửa thất bại",
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}