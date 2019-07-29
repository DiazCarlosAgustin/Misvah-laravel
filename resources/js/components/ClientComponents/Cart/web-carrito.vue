<template>
    <div class="container mt-5">
        <div class="row ">
            <div class="col-12">
                <div class="titulo-carrito mt-5 pb-3">
                    Mi carrito
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 table-responsive">
                <table id="dtHorizontalExample" class="table text-center" cellspacing="0"
                width="100%">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Color</th>
                            <th scope="col">Precio unitario</th>
                            <th scope="col">Precio Total</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <producto-carrito></producto-carrito>
                    </tbody>
                </table>
                <div class="total mr-5 border-left border-right border-bottom">
                    <div class="h5">Total: <span> $350</span></div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center  mt-2">
            <div class="col-12 col-xs-12 col-md-6">
                <form action="">
                        <div class="input-group mt-2 form-group-sm">
                            <input type="text" class="form-control" placeholder="Cupon" aria-label="Example text with button addon"
                            aria-describedby="button-addon1">
                            <div class="input-group-prepend">
                                <button class="btn btn-md btn-pink m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon1">Cajear</button>
                            </div>
                        </div>
                </form>
            </div>
            <div class="col-12 col-xs-12 col-md-6">
                <button class="btn btn-pink float-right">Continuar con la compra</button>
            </div>
        </div>
    </div>
        
</template>
<script>
    export default {
        name:'web-carrito',
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
    .total{
        width: 250px;
        text-align: center;
        margin-left: auto;
    }
</style>
