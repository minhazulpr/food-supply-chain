<nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="{{route('home')}}">FoodChain</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            @if(!Auth::check())
              <li class="nav-item">
                <a class="nav-link" href="{{route('home')}}">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{route('verify')}}">Verify</a>
              </li>
            @endif

            @role('farmer')
            <li class="nav-item">
              <a class="nav-link" href="{{route('product.add')}}">Add Products</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="{{route('product.status')}}">Products Status</a>
            </li>
            @endrole

            @role('admin')
              <li class="nav-item">
                <a class="nav-link" href="{{route('admin.request')}}">Requests</a>
              </li>
            @endrole

            @role('retailers')
              <li class="nav-item">
                <a class="nav-link" href="{{route('retailer.product')}}">Available Products</a>
              </li>
            @endrole

            @role('logistics')
              <li class="nav-item">
                <a class="nav-link" href="{{route('logistic.product')}}">Available Products</a>
              </li>
            @endrole
            
            @auth
            <li class="nav-item">
              <a href="{{route('logout')}}" class="btn btn-danger">Logout</a>
            </li>
            @endauth

            @if(!Auth::check())
            <li class="nav-item">
              <a class="nav-link" href="{{route('register')}}">Register</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-primary" href="{{route('login')}}">Login</a>
            </li>
          @endif
          </ul>
          
          
          
        </div>
      </div>
    </nav>