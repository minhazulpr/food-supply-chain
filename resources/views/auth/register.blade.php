@extends('layouts.master')

@section('title')
Register
@endsection


@section('content')
    <div class="container">
        <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="col-md-4">
                <div class="card card-body">
                    <h5 class="mb-0 mt-3">Create Account</h5>
                    <hr class="mb-4">
                    <form action="{{route('register')}}" method="post">
                        @csrf
                        @method('post')
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" name="email" id="email" class="form-control">
                            @error('email')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" name="password" id="password" class="form-control">
                            @error('password')
                                <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>

                        <div class="mb-3">
                            <label for="role" class="form-label">Role</label>
                            <select name="role_id" id="role" class="form-select" aria-label="Default select example">
                                <option value="2">Producer</option>
                                <option value="4">Retailers</option>
                                <option value="3">Logistics</option>
                            </select>
                        </div>

                        <button class="btn btn-primary" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection