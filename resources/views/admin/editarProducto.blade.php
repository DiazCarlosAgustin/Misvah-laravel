@extends('layouts.admin')

@section('title','Editar producto')

@section('container')
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col col-12 mt-4">
                <h2 class="text-center">Editar producto</h2>
            </div>
        </div>
        <div class="row mt-2">
            <editar-producto></editar-producto>
            <div class="col-12 col-xs-12 col-md-12 col-lg-4">
                <nuevo-color></nuevo-color>
                <stock-color></stock-color>
                <imagen-color></imagen-color>
                <generar-cupon-descuento></generar-cupon-descuento>
                <generar-oferta></generar-oferta>
            </div>
        </div>
    </div>

    {{-- Modal's --}}
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Editar color</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="">
                  <div class="form-group">
                      <label for="txtModalStock">Stock:</label>
                      <input type="text" name="txtModalStock" class="form-control" id="txtModalStock" value="10">
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    <div class="modal fade" id="ModalEditarImagenes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Editar Imagenes</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body tabla-editar-imagenes">
              <form action="">
                  <div class="form-group text-center">
                      <table class="table table-sm">
                          <thead>
                              <tr>
                                  <th>Imagen</th>
                                  <th>Color asociado</th>
                                  <th>Accion</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                                  </td>
                                  <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor" id="radioColor">
                                        <label for="radioColor" class="form-check-label disabled"><span style="background-color:yellow;"></span></label>
                                    </div>
                                  </td>
                                  <td class="align-middle">
                                      <button type="submit" class="btn btn-danger">Eliminar</button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                                  </td>
                                  <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor" id="radioColor">
                                        <label for="radioColor" class="form-check-label disabled"><span style="background-color:yellow;"></span></label>
                                    </div>
                                  </td>
                                  <td class="align-middle">
                                      <button type="submit" class="btn btn-danger">Eliminar</button>
                                  </td>
                              </tr>
                              <tr>
                                  <td class="align-middle">
                                    <img src="https://via.placeholder.com/75x75.png" alt="" class="my-1">
                                  </td>
                                  <td class="align-middle">
                                    <div class="colores">
                                        <input type="radio" name="radioColor" id="radioColor">
                                        <label for="radioColor" class="form-check-label disabled"><span style="background-color:yellow;"></span></label>
                                    </div>
                                  </td>
                                  <td class="align-middle">
                                      <button type="submit" class="btn btn-danger">Eliminar</button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
@endsection
@section('script')
<script src="{{asset('js/app.js')}}" defer></script>
@endsection