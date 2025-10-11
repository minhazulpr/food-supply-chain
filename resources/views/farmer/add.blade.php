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
                            <span class="text-danger" id="titleError"></span>
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <input type="text" name="description" class="form-control" id="description">
                            <span class="text-danger" id="descriptionError"></span>

                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="number" name="price" class="form-control" id="price">
                                    <span class="text-danger" id="priceError"></span>

                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="unit" class="form-label">Unit</label>
                                <select name="unit" id="unit" class="form-select" aria-label="Default select example">
                                    <option value="KG">KG</option>
                                    <option value="Liter">Liter</option>
                                    <option value="Hali">Hali</option>
                                </select>
                            </div>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script>
        let authUserId = @json(Auth::user()->id);
        
    </script>

@endsection