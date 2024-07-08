<?php

namespace App\Providers;

use App\Repositories\Img\ImgRepository;
use App\Repositories\Img\ImgRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Snippet\SnippetRepository;
use App\Repositories\Snippet\SnippetRepositoryInterface;
use App\Repositories\Vote\VoteRepository;
use App\Repositories\Vote\VoteRepositoryInterface;
use App\Repositories\Role\RoleRepository;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\SnippetTag\SnippetTagRepository;
use App\Repositories\SnippetTag\SnippetTagRepositoryInterface;
use App\Repositories\HistoryState\HistoryStateRepository;
use App\Repositories\HistoryState\HistoryStateRepositoryInterface;
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
        $this->app->singleton(VoteRepositoryInterface::class, VoteRepository::class);
        $this->app->singleton(RoleRepositoryInterface::class, RoleRepository::class);
        $this->app->singleton(SnippetTagRepositoryInterface::class, SnippetTagRepository::class);
        $this->app->singleton(HistoryStateRepositoryInterface::class, HistoryStateRepository::class);
        $this->app->singleton(ImgRepositoryInterface::class, ImgRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
