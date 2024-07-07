<?php

namespace Database\Seeders;

use App\Models\Role;
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
            'phone' => '0866924229',
            'password'=> Hash::make('12345@Aa'),
            'job' => 1,
            'state' => 1,
            'role_id' => 1,
            'profile' => 'Admin',
            'lastLogin' => 1,
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@gmail.com',
            'phone' => '0866924229',
            'password'=> Hash::make('12345@Qq'),
            'job' => 2,
            'state' => 1,
            'role_id' => 2,
            'profile' => 'User',
            'lastLogin' => 1,
        ]);
    }
}
