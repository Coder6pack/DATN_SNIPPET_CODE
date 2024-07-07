<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\SnippetTag\SnippetTagRepositoryInterface;

class SnippetTagController extends Controller
{
    public function __construct(
        protected SnippetTagRepositoryInterface $snippetTagRepository,
    ) {}
    public function index()
    {
        $snippetTags = $this->snippetTagRepository->getForeign();
        return response()->json([
            'data' =>  $snippetTags,
        ]);
    }

    public function detail($id)
    {
        $snippetTags = $this->snippetTagRepository->getTypeId($id);
        return response()->json([
            'data' =>  $snippetTags,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'snippet_id' => 'required',
                'name' => 'required|string|max:255',
            ]);

            $snippetTag = $this->snippetTagRepository->create($validatedData);

            return response()->json([
                'data' => $snippetTag,
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
                'snippet_id' => 'required',
                'name' => 'required|string|max:255',
            ]);

            $snippetTags = $this->snippetTagRepository->update($id, $validatedData);

            return response()->json([
                'data' => $snippetTags,
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

            $votes = $this->snippetTagRepository->deleteSnippetTag($request -> snippet_id);

            return response()->json([
                'data' => $votes,
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
