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

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'img_id' => 'required',
                'title' => 'required|string|max:255',
                'content' => 'required|string|max:1024',
            ]);

            $snippet = $this->snippetRepository->create($validatedData);

            return response()->json([
                'data' => $snippet,
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
                'user_id' => 'required',
                'img_id' => 'required',
                'title' => 'required|string|max:255',
                'content' => 'required|string|max:1024',
            ]);

            $snippets = $this->snippetRepository->update($id, $validatedData);

            return response()->json([
                'data' => $snippets,
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

            $votes = $this->snippetRepository->deleteSnippet($request -> user_id, $request -> img_id);

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
