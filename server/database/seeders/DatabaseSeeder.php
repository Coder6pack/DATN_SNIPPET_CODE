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
        $user = User::create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'password'=> Hash::make('12345@Qq'),
            'role_id' => 2,
        ]);
        foreach ([1,2,3,4,5,6,7,8,9,10]as $item) {
            Snippet::create([
                'user_id' => $user->id,
                'title' => 'Tl'.$item,
                'content' => 'abc'.$item,
            ]);
        }

    }
}
