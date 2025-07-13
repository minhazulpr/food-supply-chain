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
        $roles = ['admin', 'farmer', 'logistics', 'retailers'];

        // Seed Role
        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role]);
        }


        // Seed Users
        User::factory()->create([
            'name' => 'inspector',
            'email' => 'inspector@gmail.com',
            'role_id' => 1,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Producer',
            'email' => 'producer@gmail.com',
            'role_id' => 2,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Logistics',
            'email' => 'logistics@gmail.com',
            'role_id' => 3,
            'password' => Hash::make(1234)
        ]);

        User::factory()->create([
            'name' => 'Retailers',
            'email' => 'retailers@gmail.com',
            'role_id' => 4,
            'password' => Hash::make(1234)
        ]);

        

        
    }
}
