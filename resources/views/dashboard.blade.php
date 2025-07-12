@extends('layouts.master')

@section('title')

Dashboard

@endsection


@section('content')
    <div class="container">
        @role('admin')
            <p>Only for Admin</p>
        @endrole

        @role('farmer')
            <p>Only for Farmer</p>
        @endrole
    </div>
@endsection