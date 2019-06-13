@extends('layouts.admin')

@section('title', 'Nuevo color')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-12">
                <h2 class="text-center">Nuevo Color</h2>    
            </div>
            <div class="col-12 col-xs-12 col-md-6 col-lg-6">
                <form action="" >
                    <div class="form-group">
                        <label for="txtColor">Color:</label>
                        <input type="color" name="txtColor" id="txtColor" class="form-control">
                    </div>
                    <div class="text-center">
                        <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                        <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{asset('js/app.js')}}" defer></script>
@endsection