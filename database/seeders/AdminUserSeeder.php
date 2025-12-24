<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // admin info
        
        User::firstOrCreate(
        ['email' => 'admin@evlab.ge'],
        [
            'name' => 'Admin',
            'password' => bcrypt('pasword123'),
            'is_admin' => true,
        ]
    );
    }
    
}
