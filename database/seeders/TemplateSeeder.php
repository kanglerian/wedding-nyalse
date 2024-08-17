<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('templates')->insert([
            [
                "user_id" => 3,
                "category_id" => 1,
                "code" => "M240817131",
                "name" => "Rustic Taziek",
                "price" => 50000,
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],
            [
                "user_id" => 3,
                "category_id" => 2,
                "code" => "M240817231",
                "name" => "Rustic Bandungs",
                "price" => 55000,
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],
            [
                "user_id" => 3,
                "category_id" => 3,
                "code" => "M240817331",
                "name" => "Rustic Yogyakarta",
                "price" => 60000,
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ]
        ]);
    }
}
