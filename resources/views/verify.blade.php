@extends('layouts.master')

@section('title')
Verification
@endsection


@section('content')
    <div class="container">
        <div class="d-flex justify-content-center align-items-center mt-5">
            <div class="col-md-4">
                <div class="card card-body">
                    <form>
                        <div class="mb-3">
                            <label for="verify" class="form-label">Enter Unique Code</label>
                            <input type="text" name="verify" id="verify" class="form-control">
                        </div>
                        <button class="btn btn-primary verify-btn" type="submit">Verify</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center mt-4">
            <div class="col-md-4">
                <div class="card card-body">
                    <table class="table product-verified-info">
                        
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection