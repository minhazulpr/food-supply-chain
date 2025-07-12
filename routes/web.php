<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FarmerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LogisticsController;
use App\Http\Controllers\RetailerController;
use App\Http\Controllers\VerificationController;

Route::get('/',[HomeController::class,'ShowHome'])->name('home');

Route::get('/verify', [VerificationController::class,'ShowForm'])->name('verify');
Route::get('/login', [AuthController::class,'ShowLogin'])->name('login');
Route::post('/login', [AuthController::class,'Login'])->name('login');
Route::any('/logout', [AuthController::class,'Logout'])->name('logout');


// Protected Routes
Route::middleware(['auth','role:admin,farmer,logistics,retailers'])->group(function(){
    
    Route::get('/dashboard', [AuthController::class,'ShowDashboard'])->name('dashboard');
});

Route::middleware(['auth','role:admin'])->group(function(){
    Route::get('/request',[AdminController::class,"ShowProducts"])->name('admin.request');
});

Route::middleware(['auth','role:farmer'])->group(function(){
    Route::get('/add', [FarmerController::class,'ShowProductForm'])->name('product.add');
    Route::get('/status', [FarmerController::class,'Status'])->name('product.status');
});

Route::middleware(['auth','role:retailers'])->group(function(){
    Route::get('/products',[RetailerController::class,"ShowProducts"])->name('retailer.product');
});

Route::middleware(['auth','role:logistics'])->group(function(){
    Route::get('/logistics/products',[LogisticsController::class,"ShowProducts"])->name('logistic.product');
});








