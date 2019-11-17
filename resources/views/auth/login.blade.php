@extends('layouts.app')

@section('title','acceder')

@section('Container')
<div class="container">
    <div class="row r-acceder text-center d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-12">
            <div class="h3 mt-5 ">
                Acceder
            </div>
        </div>
        <div class="col-12 col-xs-12 col-md-6 mt-4">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="form-group text-left">
                    <input type="email" id="txtAccederMail" class="form-control mb-4 @error('email') is-invalid @enderror"  placeholder="example@mail.com" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    {{-- controlo el error --}}
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>El mail ingresado no es correcto</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group text-left">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="contraseña">
                    {{-- controlo el error --}}
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>La contraseña ingresada es incorrecta</strong>
                    </span>
                    @enderror
                </div>
                <div class="d-flex justify-content-around">
                    <div>
                        <!-- Remember me -->
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            <label class="custom-control-label" for="remember">
                                Recuerdame
                            </label>
                        </div>
                    </div>
                    <div>
                        <!-- Forgot password -->
                        @if (Route::has('password.request'))
                            <a href="{{ route('password.request') }}">
                                Olvide mi contraseña
                            </a>
                        @endif
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn btn-block my-4 pink text-white" type="submit">Acceder</button>
                </div>
                <div class="form-group">
                    <p>¿No estas registrado?
                        <a href="/registrarse"> Registrarse</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
    
@endsection