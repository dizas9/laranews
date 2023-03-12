<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Role extends Model
{
    //sazid
     //sazid
     protected $fillable = [
        'name','slug',
    ];
    public function users(){
        return $this->hasMany('App\User');
    }
}
