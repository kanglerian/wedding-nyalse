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
        Schema::create('couples', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('invitation_id');
            $table->string('nickname');
            $table->string('fullname');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('child', 2);
            $table->text('privilage')->nullable();
            $table->boolean('gender');
            $table->timestamps();

            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('couples');
    }
};
