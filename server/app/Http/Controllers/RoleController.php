<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Repositories\Role\RoleRepositoryInterface;

class RoleController extends Controller
{
    public function __construct(
        protected RoleRepositoryInterface $roleRepository,
    ) {}
    public function index()
    {
        $roles = $this->roleRepository->getForeign();
        return response()->json([
            'data' =>  $roles,
        ]);
    }

    public function detail($id)
    {
        $roles = $this->roleRepository->getTypeId($id);
        return response()->json([
            'data' =>  $roles,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required',
            ]);

            $roles = $this->roleRepository->create($validatedData);

            return response()->json([
                'data' => $roles,
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
                'name' => 'required',
            ]);

            $roles = $this->roleRepository->update($id, $validatedData);

            return response()->json([
                'data' => $roles,
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

    public function destroy(Request $request)
    {
        try {

            $roles = $this->roleRepository->deleteRole($request->id);

            return response()->json([
                'data' => $roles,
                'message' => "Xóa thành công",
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'message' => "Xóa thất bại",
                'errors' => $e->errors(),
            ], 422);
        }catch (\Exception $e) {
            return response()->json([
                'message' => "Xóa thất bại",
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
