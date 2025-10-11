<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FarmerController;
use App\Http\Controllers\RetailerController;
use App\Http\Controllers\LogisticsController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\SslCommerzPaymentController;


Route::get('/',[HomeController::class,'ShowHome'])->name('home');

Route::get('/verify', [VerificationController::class,'ShowForm'])->name('verify');
Route::get('/login', [AuthController::class,'ShowLogin'])->name('login');
Route::post('/login', [AuthController::class,'Login'])->name('login');
Route::get('/register', [AuthController::class,'ShowRegister'])->name('register');
Route::post('/register', [AuthController::class,'Register'])->name('register');
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

    // Payment Route
    Route::get('/checkout', [SslCommerzPaymentController::class, 'exampleHostedCheckout']);
    Route::post('/pay', [SslCommerzPaymentController::class, 'index']);
    Route::post('/pay-via-ajax', [SslCommerzPaymentController::class, 'payViaAjax']);

    Route::post('/success', [SslCommerzPaymentController::class, 'success']);
    Route::post('/fail', [SslCommerzPaymentController::class, 'fail']);
    Route::post('/cancel', [SslCommerzPaymentController::class, 'cancel']);

});

Route::middleware(['auth','role:logistics'])->group(function(){
    Route::get('/logistics/products',[LogisticsController::class,"ShowProducts"])->name('logistic.product');

});

    
// SSLCOMMERZ Start

// Route::get('/checkout2', [SslCommerzPaymentController::class, 'exampleHostedCheckout']);



// Route::post('/ipn', [SslCommerzPaymentController::class, 'ipn']);
//SSLCOMMERZ END







