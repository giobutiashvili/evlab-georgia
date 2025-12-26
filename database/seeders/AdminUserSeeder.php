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
        // admin infomation
        
        User::updateOrCreate(
    ['email' => 'admin@evlab.ge'],
    [
        'name' => 'Admin',
        'password' => 'pasword1234', // bcrypt აღარ გჭირდება
        'is_admin' => true,
    ]
);
    }
    
}
