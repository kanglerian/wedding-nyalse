<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                "name" => "Rustic",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Vintage",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Minimalist",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Modern",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Glamour",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Bohemian (Boho)",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Floral",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Fairy Tale",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Elegant",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Traditional",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Romantic",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],[
                "name" => "Geometric",
                "status" => true,
                "created_at" => Carbon::now()->setTimezone('Asia/Jakarta'),
                "updated_at" => Carbon::now()->setTimezone('Asia/Jakarta')
            ],
        ]);
    }
}
