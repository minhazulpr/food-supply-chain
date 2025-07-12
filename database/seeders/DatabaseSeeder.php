<?php

namespace Database\Seeders;

use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $roles = ['admin', 'farmer', 'logistics', 'retailers'];

        User::factory()->create([
            'name' => 'inspector',
            'email' => 'inspector@gmail.com',
            'role_id' => 1,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@gmail.com',
            'role_id' => 2,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'logistics@gmail.com',
            'role_id' => 3,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'retailers@gmail.com',
            'role_id' => 4,
            'password' => Hash::make(1234)
        ]);

        

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }
    }
}
