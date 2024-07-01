<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SnippetController;
use App\Http\Controllers\SnippetTagController;
use App\Http\Controllers\VoteController;
use App\Http\Controllers\Auth\AuthController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login', [AuthController::class, 'login']);

Route::get('/error', function () {
    return response()->json([
        'status' => false,
        'message' => 'Không có quyền truy cập vào admin',
    ]);
})->name('auth.error');

Route::middleware('auth:api')->group(function () {
    //user
    Route::get('/user', [UserController::class, 'index']);
    Route::get('/user/{id}', [UserController::class, 'detail']);
    Route::post('/user/store', [UserController::class, 'store']);
    Route::put('/user/edit/{id}', [UserController::class, 'edit']);

     //role
     Route::get('/role', [RoleController::class, 'index']);
     Route::get('/role/{id}', [RoleController::class, 'detail']);
     Route::post('/role/store', [RoleController::class, 'store']);
     Route::put('/role/edit/{id}', [RoleController::class, 'edit']);
     Route::delete('/role/delete', [RoleController::class, 'destroy']);
     
     //snippet
     Route::get('/snippet', [SnippetController::class, 'index']);
     Route::get('/snippet/{id}', [SnippetController::class, 'detail']);
     Route::post('/snippet/store', [SnippetController::class, 'store']);
     Route::put('/snippet/edit/{id}', [SnippetController::class, 'edit']);
     Route::delete('/snippet/delete', [SnippetController::class, 'destroy']);
 
     //snippet Tag
    Route::get('/snippetTag', [SnippetTagController::class, 'index']);
    Route::get('/snippetTag/{id}', [SnippetTagController::class, 'detail']);
    Route::post('/snippetTag/store', [SnippetTagController::class, 'store']);
    Route::put('/snippetTag/edit/{id}', [SnippetTagController::class, 'edit']);
    Route::delete('/snippetTag/delete', [SnippetTagController::class, 'destroy']);

     //google
     Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle']);
     Route::get('/auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);
 
     //vote
     Route::get('/vote', [VoteController::class, 'index']);
     Route::get('/vote/{id}', [VoteController::class, 'detail']);
     Route::post('/vote/store', [VoteController::class, 'store']);
     Route::delete('/vote/delete', [VoteController::class, 'destroy']);
});
   

