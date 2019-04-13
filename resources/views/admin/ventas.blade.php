@extends('layouts.admin')

@section('title', 'Ventas')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center text-center">
            <div class="col-12">
                <h2>Ventas</h2>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="d-ajustes col-10">
                <form action="">
                    <div class="group-form col-12 col-md-4 col-xs-12">
                        Ventas realizadas en un periodo de mes:
                        <input type="date" name="dateFecha1" id="dateFecha1" class="form-control">
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection