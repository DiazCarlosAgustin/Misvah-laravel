<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;

class appController extends Controller
{
    public function init(){
        $user = Auth::user();

        return response()->json($user,200);
    }
    
    public function login(Request $request){

        
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            $user = User::where('email','=',$request->email)->get();
            if($user->is_admin = 1){
                return redirect('/admin/index')->response()->json($user, 200);
            }
            elseif($user->is_admin = 0) {
                return response()->json($user, 200)->redirect('/');
            }
        }
        else{
            return response()->json(['error' => 'No se pudo acceder, intente nuevamente.'], 401);
        }
    }
    public function register(Request $request){

        // busca si ya existe el email
        $user = User::where('email', $request->email)->first();

        if (isset($user->id)) {
            // en caso de existir retorna un mensaje que ya existe el email
            return response()->json(["error" => "El email ya se encuentra en uso."]);
        }

        // registro de usuarios
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->telefono = $request->telefono;
        $user->is_admin = 0;

        $user->save();

        Auth::login($user);
        
        return response()->json($user, 200);
    }
    public function logout(){
        Auth::logout();
    }

}
