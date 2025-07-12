@extends('layouts.master')

@section('title')

Homepage

@endsection


@section('content')
    <!-- Main Slider -->
    <section class="section main-slider d-flex justify-content-center mt-5">
            <div class="col-12 col-md-8">
                <div class="container-fluid">
                    <div class="owl-carousel main-carousel owl-theme owl-loaded">
                        <div class="owl-stage-outer">
                            <div class="owl-stage">
                                <!-- Item -->
                                <div class="owl-item">
                                    <div class="slider-wrapper">
                                        <img src="img/slider-1.jpg" alt="">
                                    </div>
                                </div>
                                <!-- Item -->
                                <div class="owl-item">
                                    <div  class="slider-wrapper">
                                        <img src="img/slider-2.jpg" alt="">
                                    </div>
                                </div>
                                <!-- Item -->
                                <div class="owl-item">
                                    <div  class="slider-wrapper">
                                        <img src="img/slider-3.jpg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <!-- Main Slider End -->

@endsection