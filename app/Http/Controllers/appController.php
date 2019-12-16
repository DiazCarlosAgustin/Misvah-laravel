<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class appController extends Controller
{
    public function init(){

    }
    
    public function login(Request $request){

    }
    public function register(Request $request){
        // registro de usuarios
        $user = new User();

        $user;
    }
    public function logout(){

    }

}
