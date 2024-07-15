<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Exception;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])
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
                'access_token' => 'Bearer '.$token,
                'expires' => auth()->factory()->getTTL() * 600
            ],
        ]);
    }

    public function token (Request $request)
    {
       try{
            $token = JWTAuth::parseToken()->getToken();
            JWTAuth::setToken($token)->checkOrFail();
            return response()->json(['message' => 'success']);
       } catch(Exception $e) {
        return response()->json(['error' => 'Token is invalid'],401);
       }
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

        return response()->json(['message' => 'Successfully logged out']);
    }
}

