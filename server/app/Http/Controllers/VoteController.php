<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\Vote\VoteRepositoryInterface;

class VoteController extends Controller
{
    public function __construct(
        protected VoteRepositoryInterface $voteRepository,
    ) {}
    public function index()
    {
        $votes = $this->voteRepository->getForeign();
        return response()->json([
            'data' =>  $votes,
        ]);
    }

    public function detail($id)
    {
        $votes = $this->voteRepository->getTypeId($id);
        return response()->json([
            'data' =>  $votes,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'snippet_id' => 'required',
                'user_id' => 'required',
                'vote_type' => 'required',
            ]);

            $user = $this->voteRepository->create($validatedData);

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
                'snippet_id' => 'required',
                'user_id' => 'required',
                'vote_type' => 'required',
            ]);

            $snippets = $this->voteRepository->update($id, $validatedData);

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

            $votes = $this->voteRepository->deleteVote($request -> user_id, $request -> snippet_id);

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
