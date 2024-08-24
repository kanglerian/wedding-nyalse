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
        Schema::create('times', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invitation_id');
            $table->datetime('marriage');
            $table->datetime('reception');
            $table->string('location_marriage');
            $table->string('location_reception');
            $table->text('gmaps')->nullable();
            $table->timestamps();

            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('times');
    }
};
