@extends('layouts.master')

@section('title')
Login
@endsection


@section('content')
    <div class="container">
        <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="col-md-4">
                <div class="card card-body">
                    <h5 class="mb-0 mt-3">Login to the system</h5>
                    <hr class="mb-4">
                    <form action="{{route('login')}}" method="post">
                        @csrf
                        @method('post')
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" name="email" id="email" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="text" name="password" id="password" class="form-control">
                        </div>

                        <button class="btn btn-primary" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection