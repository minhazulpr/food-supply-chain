@extends('layouts.master')

@section('title')

Product Request

@endsection


@section('content')
    <section class="mt-5">
        <div class="container">
            <table class="table product-status table-bordered mt-4">
                <thead>
                    <th>#</th>
                    <th>Unique Code</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </thead>
                <tbody class="requestinfo">

                </tbody>
            </table>
        </div>
    </section>

@endsection