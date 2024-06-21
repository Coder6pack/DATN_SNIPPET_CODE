<?php

use Illuminate\Http\Request;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SnippetController;
use App\Http\Controllers\CommentController;

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

Route::middleware(['admin'])->group(function () {
    Route::resource('roles', RoleController::class);
});
//user
Route::get('user', [UserController::class, 'index']);
Route::get('user/{id}', [UserController::class, 'detail']);
//snippet
Route::get('snippet', [SnippetController::class, 'index']);
Route::get('snippet/{id}', [SnippetController::class, 'detail']);
//comment
Route::get('comment', [CommentController::class, 'index']);
Route::get('comment/{id}', [CommentController::class, 'detail']);
