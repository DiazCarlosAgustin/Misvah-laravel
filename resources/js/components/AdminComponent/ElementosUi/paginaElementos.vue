<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 mt-5 ">
                <h4 class="text-center">Elementos de la pagina</h4>
            </div>
        </div>
        <div class="row justify-content-center d-flex mt-2">
            <div class="col-12 col-sm-12 col-md-8 col-lg-6 ">
                <form action="">
                    <div class="input-group">
                        <input type="text" name="txtBuscarElemento" id="txtBuscarElemento" class="my-auto form-control" placeholder="Buscar elemento">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-info float-right">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex  justify-content-center mt-3">
            <menu-form @newStyleMenu="newStyleMenu"/>
        </div>
        <div class="row">
            <div class="col-12">
                    <div class="h5">Historial de cambios</div>
            </div>
            <tabla-menu :menus="menus" :load="load"/>
        </div>
        <hr>
        <fondo-componente />
        <hr>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5 text-center">
                    Texto dentro de la imagen de fondo
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-8 col-lg-6">
                <form action="">
                    <div class="form-group">
                        <label for="txtTitulo">Titulo</label>
                        <input type="text" name="txtTitulo" id="txtTitulo" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">Color titulo</label>
                        <input type="text" name="txtColorTitulo" id="txtColorTitulo" class="form-control" placeholder="#FFF">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">Subtitulo</label>
                        <input type="text" name="txtSubtitulo" id="txtSubtitulo" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="txtTitulo">color subtitulo</label>
                        <input type="text" name="txtColorSubtitulo" id="txtColorSubtitulo" class="form-control" placeholder="#FFF">
                    </div>
                    <div class="form-group">
                        <label for="ColorFondoBotones">Color de fondo de botones</label>
                        <input type="text" name="ColorFondoBotones" id="ColorFondoBotones" class="form-control" placeholder="#FFFFFF">
                    </div>
                    <div class="form-group">
                        <label for="ColorLetraBotones">Color de letra de botones</label>
                        <input type="text" name="ColorLetraBotones" id="ColorLetraBotones" class="form-control" placeholder="#FFFFFF">
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="Habilitar" name="Estado" class="custom-control-input">
                        <label class="custom-control-label" for="Habilitar">Habilitar los botones</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="Desabilitar" name="Estado" class="custom-control-input">
                        <label class="custom-control-label" for="Desabilitar">Desabilitar los botones</label>
                    </div>
                    <div class="form-group d-flex">
                        <button class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="h5">Historial de cambios</div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="table-responsive">
                    <table class="table table-striped table-md">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Subtitulo</th>
                                <th>Color del Titulo</th>
                                <th>Color del Subtitulo</th>
                                <th>Color de botones</th>
                                <th>Color de letra</th>
                                <th>Estado de los botones</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="align-middle">Titulo</td>
                                <td class="align-middle">Subtitulo</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">08/07/2019 10:30:00</td>
                                <th class="align-middle text-center">Activo</th>
                                <th class="align-middle"><button class="btn btn-danger">Desabilitar</button></th>
                            </tr>
                            <tr>
                                <td class="align-middle">Titulo</td>
                                <td class="align-middle">Subtitulo</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">#333111</td>
                                <td class="align-middle">08/07/2019 10:30:00</td>
                                <th class="align-middle text-center">Desactivado</th>
                                <th class="align-middle"><button class="btn btn-success">Habilitar</button></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="h5 text-center">
                    Habilitar seccion de instagram
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-8 col-lg-6 pt-2 text-center">
                <form action="">
                    <div class="custom-control custom-radio custom-control-inline mx-3 mb-2">
                        <input type="radio" id="mostrar" name="habilitar" class="custom-control-input">
                        <label class="custom-control-label" for="mostrar">Habilitar seccion</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline mx-3 mb-2">
                        <input type="radio" id="ocultar" name="habilitar" class="custom-control-input">
                        <label class="custom-control-label" for="ocultar">Desabilitar seccion</label>
                    </div>
                    <div class="form-group d-flex">
                        <button type="submit" class="btn btn-primary ml-auto">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menus:[],
            load:true
        }
    },
    mounted(){
        this.getMenus()
    },
    methods: {
        newStyleMenu($data){
            this.menus.push($data)
        },
        getMenus(){
            axios.get('http://127.0.0.1:8000/api/menu')
            .then(response =>{
                this.menus = response.data
                this.load= !this.load 
            })
            .catch(err =>{
                console.log(err)
            })
        }
    },
}
</script>