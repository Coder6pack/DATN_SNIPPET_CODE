<?php

namespace App\Http\Controllers;

use App\Repositories\Img\ImgRepositoryInterface;
use Illuminate\Http\Request;

class ImgController extends Controller
{
    public function __construct(
        protected ImgRepositoryInterface $imgRepository,
    ) {}
    public function index()
    {
        $imgs = $this->imgRepository->getForeign();
        return response()->json([
            'data' =>  $imgs,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'img' => 'required',
            ]);

            $imgs = $this->imgRepository->create($validatedData);

            return response()->json([
                'data' => $imgs,
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
                'img' => 'required',
            ]);

            $imgs = $this->imgRepository->update($id, $validatedData);

            return response()->json([
                'data' => $imgs,
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

            $imgs = $this->imgRepository->deleteImg($request->id);

            return response()->json([
                'data' => $imgs,
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
