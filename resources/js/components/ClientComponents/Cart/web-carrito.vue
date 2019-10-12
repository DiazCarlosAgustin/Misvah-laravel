<template>
    <div class="container mt-4">
        <div class="row ">
            <div class="col-12">
                <div class="titulo-carrito text-center">
                   <h3 class="text-center">Mi carrito</h3>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center" v-if="productos.length <= 0">
            <h4 class="text-center my-5 py-5">No hay productos en el carrito.</h4>
        </div>
        <div class="row" v-if="productos.length > 0">
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
                        <producto-carrito 
                            v-for="(producto,index) in productos"
                            :key="producto.id"
                            :producto="producto"
                            @subTotal="subTot(index,...arguments)"
                            @EliminarProducto="Eliminar(index)"
                        />
                    </tbody>
                </table>
                <div class="total mr-5 border-left border-right border-bottom">
                    <div class="h5">Total: <span> ${{totalCarrito}}</span></div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center  mt-2" v-if="productos.length > 0">
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
                productos:[
                    {
                        id: 0,
                        producto: "producto 1",
                        imgProducto: "https://via.placeholder.com/75",
                        cantidad: 2,
                        precio: 450,
                        color: "https://via.placeholder.com/40/0000FF/808080",
                        subTotal:900
                    },
                    {
                        id: 1,
                        producto: "producto 2",
                        imgProducto: "https://via.placeholder.com/75",
                        cantidad: 2,
                        precio: 350,
                        color: "https://via.placeholder.com/40/0000FF/808080",
                        subTotal:700
                    },
                    {
                        id: 2,
                        producto: "producto 3",
                        imgProducto: "https://via.placeholder.com/75",
                        cantidad: 1,
                        precio: 150,
                        color: "https://via.placeholder.com/40/0000FF/808080",
                        subTotal:150
                    },
                    {
                        id: 3,
                        producto: "producto 4",
                        imgProducto: "https://via.placeholder.com/75",
                        cantidad: 1,
                        precio: 750,
                        color: "https://via.placeholder.com/40/0000FF/808080",
                        subTotal:750
                    }
                ],
                total:0
            }
        },
        methods: {
            subTot: function(i,sub){
                // modifica el subTotal de cada producto en el carrito
                this.productos[i].subTotal = sub
                // divide el subTotal por el precio unitario para calcular la cantidad
                this.productos[i].cantidad = this.productos[i].subTotal / this.productos[i].precio 
                
            },
            Eliminar:function(i){
                // elimina un producto del array
                this.productos.splice(i,1);
            }
        },
        computed: {
            totalCarrito:function(){
                // recorre el array de productos en el carrito para sacar el total
                this.total = 0
                for (i in this.productos){
                    this.total = this.total + this.productos[i].subTotal
                    
                }
                return this.total
            }
        },
    }
</script>
<style scoped>
    .total{
        width: 250px;
        text-align: center;
        margin-left: auto;
    }
</style>
