<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('invoice', 30)->unique();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('template_id');
            $table->dateTime('datetime');
            $table->string('contact', 14);
            $table->dateTime('checkout');
            /* Midtrans */
            $table->uuid('order_id');
            $table->integer('gross_amount');
            $table->string('token')->nullable();
            /* End Midtrans */
            $table->string('is_paid', 20)->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('template_id')->references('id')->on('templates')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
