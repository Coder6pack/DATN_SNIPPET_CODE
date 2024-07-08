<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\ImgController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SnippetController;
use App\Http\Controllers\SnippetTagController;
use App\Http\Controllers\VoteController;
use App\Http\Controllers\HistoryStateController;
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

// Auth routes
Route::post('/login', [AuthController::class, 'login']);

Route::get('/error', function () {
    return response()->json([
        'status' => false,
        'message' => 'Sai token',
    ]);
})->name('auth.error');

// ADMIN routes
Route::middleware(['auth:api', 'admin'])->group(function () {
    // User routes
    Route::prefix('admin')->group(function () {
        Route::get('/user', [UserController::class, 'index']);
        Route::get('/user/{id}', [UserController::class, 'detail']);
        Route::post('/user/store', [UserController::class, 'store']);
        Route::put('/user/edit/{id}', [UserController::class, 'edit']);
        Route::delete('/user/delete', [UserController::class, 'destroy']);
    // Role routes
        Route::get('/role', [RoleController::class, 'index']);
        Route::get('/role/{id}', [RoleController::class, 'detail']);
        Route::post('/role/store', [RoleController::class, 'store']);
        Route::put('/role/edit/{id}', [RoleController::class, 'edit']);
        Route::delete('/role/delete', [RoleController::class, 'destroy']);
    // Snippet routes
        Route::get('/snippet', [SnippetController::class, 'index']);
        Route::get('/snippet/{id}', [SnippetController::class, 'detail']);
        Route::post('/snippet/store', [SnippetController::class, 'store']);
        Route::put('/snippet/edit/{id}', [SnippetController::class, 'edit']);
        Route::delete('/snippet/delete', [SnippetController::class, 'destroy']);
    // SnippetTag routes
        Route::get('/snippetTag', [SnippetTagController::class, 'index']);
        Route::get('/snippetTag/{id}', [SnippetTagController::class, 'detail']);
        Route::post('/snippetTag/store', [SnippetTagController::class, 'store']);
        Route::put('/snippetTag/edit/{id}', [SnippetTagController::class, 'edit']);
        Route::delete('/snippetTag/delete', [SnippetTagController::class, 'destroy']);
    // Vote routes
        Route::get('/vote', [VoteController::class, 'index']);
        Route::get('/vote/{id}', [VoteController::class, 'detail']);
        Route::post('/vote/store', [VoteController::class, 'store']);
        Route::put('/vote/edit/{id}', [VoteController::class, 'edit']);
        Route::delete('/vote/delete', [VoteController::class, 'destroy']);

    // HistoryState routes
        Route::get('/historyState', [HistoryStateController::class, 'index']);
        Route::post('/historyState/edit/{id}', [HistoryStateController::class, 'edit']);
        Route::delete('/historyState/delete', [HistoryStateController::class, 'destroy']);

        Route::post('/logout', [AuthController::class, 'logout']);
    });
});

// USER routes
Route::middleware(['auth:api', 'user'])->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('/me', [UserController::class, 'detail']);
        Route::put('/edit/me', [UserController::class, 'edit']);
        Route::delete('/delete', [UserController::class, 'destroy']);
        //Snippet
        Route::post('/snippet/store', [SnippetController::class, 'store']);
        Route::put('/snippet/edit/{id}', [SnippetController::class, 'edit']);
        Route::delete('/snippet/delete', [SnippetController::class, 'destroy']);

        // Img routes
        Route::get('/img', [ImgController::class, 'index']);
        Route::post('/img/store', [ImgController::class, 'store']);
        Route::put('/img/edit/{id}', [ImgController::class, 'edit']);
        Route::delete('/img/delete', [ImgController::class, 'destroy']);

        Route::post('/logout', [AuthController::class, 'logout']);
    });
});

//Snippet
Route::get('/snippet', [SnippetController::class, 'index']);
Route::get('/snippet/{id}', [SnippetController::class, 'detail']);
