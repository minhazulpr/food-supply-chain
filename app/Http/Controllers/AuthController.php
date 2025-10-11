<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function ShowLogin(){
        return view('auth.login');
    }

    public function ShowRegister(){
        return view('auth.register');
    }

    public function ShowDashboard(){
        return view('dashboard');
    }

    public function Login(Request $request){
        $credintials = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt($credintials)){
            $request->session()->regenerate();

            return redirect()->route('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function Register(Request $request){
        $validated = $request->validate([
            'email' => 'required | unique:users',
            'password' => 'required',
            'role_id' => 'required'
        ]);

        User::create([
            'email' => $validated['email'],
            'password' => $validated['password'],
            'role_id' => $validated['role_id']
        ]);

        return redirect()->route('login');
    }


    public function Logout(Request $request){

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}
