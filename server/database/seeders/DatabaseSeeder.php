<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\Snippet;
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
        //Role admin
        $user = new Role();
        $user->name = 'admin';
        $user->save();

        //Role user
        $user = new Role();
        $user->name = 'user';
        $user->save();


        User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password'=> Hash::make('12345@Aa'),
            'role_id' => 1,
        ]);



    }
}
