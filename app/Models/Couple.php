<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Couple extends Model
{
    use HasFactory;

    /**
    * The attributes that are mass assignable.
    *
    * @var array<int, string>
    */
    protected $fillable = [
        'invitation_id',
        'nickname',
        'fullname',
        'father_name',
        'mother_name',
        'child',
        'privilage',
        'gender',
    ];
}
