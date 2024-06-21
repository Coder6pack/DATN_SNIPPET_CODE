<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Snippet\SnippetRepository;
use App\Repositories\Snippet\SnippetRepositoryInterface;
use App\Repositories\Comment\CommentRepository;
use App\Repositories\Comment\CommentRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(UserRepositoryInterface::class, UserRepository::class);
        $this->app->singleton(SnippetRepositoryInterface::class, SnippetRepository::class);
        $this->app->singleton(CommentRepositoryInterface::class, CommentRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Route::macro('isWith', function (...$parameters) {
            foreach ($parameters as $parameter) {
                if (url()->current() == (!is_array($parameter)
                    ? route($parameter)
                    : route($parameter[0], $parameter[1] ?? []))
                ) {
                    return true;
                }
            }
            return false;
        });
    }
}
