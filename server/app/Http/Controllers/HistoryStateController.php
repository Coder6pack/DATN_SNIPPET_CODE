<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\HistoryState\HistoryStateRepositoryInterface;

class HistoryStateController extends Controller
{
    public function __construct(
        protected HistoryStateRepositoryInterface $historyStateRepository,
    ) {}
    public function index()
    {
        $historyStates = $this->historyStateRepository->getForeign();
        return response()->json([
            'data' =>  $historyStates,
        ]);
    }

    public function edit(Request $request, $id)
    {
        try {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'lastTime' => 'required',
            ]);

            $historyStates = $this->historyStateRepository->update($id, $validatedData);

            return response()->json([
                'data' => $historyStates,
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

            $historyStates = $this->historyStateRepository->deleteHistoryState($request->id);

            return response()->json([
                'data' => $historyStates,
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
