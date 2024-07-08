<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password', 'role_id');

        $user = User::where('email', $credentials['email'])
            ->where('role_id', $credentials['role_id'])
            ->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Đăng nhập thất bại'
            ], 401);
        }

        if (! $token = auth()->login($user)) {
            return response()->json([
                'success' => false,
                'message' => 'Đăng nhập thất bại'
            ], 401);
        }
        return response()->json([
            'message' => 'Đăng nhập thành công',
            'data' => [
                'user' => auth()->user(),
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires' => auth()->factory()->getTTL() * 60
            ],
        ]);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }
}

