<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'Admin';
        $user->email = 'admin@gmail.com';
        $user->phone = '0866924229';
        $user->password = Hash::make('12345@Aa');
        $user->job = 1;
        $user->state = 1;
        $user->role_id = 1;
        $user->profile = 'Admin';
        $user->lastLogin = 1;
        $user->save();
    }
}
