<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        if (auth()->user() && auth()->user()->role->name == 'admin') {
            return $next($request);
        }
        return response()->json([
            'status' => false,
            'message' => 'Bạn không có quyền truy cập vào admin',
        ]);
         
    }
}
