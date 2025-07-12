@extends('layouts.master')

@section('title')

All Products

@endsection


@section('content')
    <div class="container">
        <button class="btn btn-info retailer-load">Load</button>
        <div class="row product  mt-5">
            <div class="col-md-3">
                <div class="card card-body">
                    <h5>Name</h5>
                    <p class="mb-1">Quantity: 100</p>
                    <p>Price: 100</p>
                    <button class="btn btn-warning">Retailer Request</button>
                </div>
            </div>
        </div>
    </div>
@endsection