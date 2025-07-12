@extends('layouts.master')

@section('title')

Product Status

@endsection


@section('content')
    <section class="mt-5">
        <div class="container">
            <button class="btn btn-info load">Load</button>
            <table class="table product-status table-bordered mt-4">
                <thead>
                    <th>#</th>
                    <th>Unique Code</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Inspection Status</th>
                    <th>Retailer Address</th>
                    <th>Logistics Address</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody class="productinfo">

                </tbody>
            </table>
        </div>
    </section>

@endsection