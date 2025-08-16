@extends('layouts.master')

@section('title')

Add Product

@endsection


@section('content')
    <section class="mt-5">
        <div class="container d-flex justify-content-center">
            <div class=" col-12 col-md-6">
                <div class="card card-body shadow shadow-sm">
                    <form  id="addProduct" enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" name="title" class="form-control" id="title">
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" name="description" class="form-control" id="description">
                        </div>

                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" name="price" class="form-control" id="price">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>

@endsection