<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FarmerController extends Controller
{
    public function ShowProductForm(){
        return view('farmer.add');
    }

    public function Status(){
        return view('farmer.status');
    }
}
