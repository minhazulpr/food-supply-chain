<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RetailerController extends Controller
{
    public function ShowProducts(){
        return view('retailer.product');
    }
}
