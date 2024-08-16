<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Date;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                "name" => "Administrator",
                "email" => "admin@nyalse.id",
                "password" => Hash::make("@Wedding311766"),
                "role" => "A",
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Client",
                "email" => "client@gmail.com",
                "password" => Hash::make("12345678"),
                "role" => "C",
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],
        ]);
    }
}
