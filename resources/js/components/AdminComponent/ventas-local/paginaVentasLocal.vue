<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 text-center">
                <h3 class="mt-5">Ventas del local</h3>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12  col-md-12 col-lg-8">
                <form action="">
                    <div class="form-group">
                        <input type="text" class="form-control mt-1" 
                            name="txtBuscar" id="txtBuscar" 
                            placeholder="Buscar producto" v-model="search">
                    </div>
                </form>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <div class="titulo">
                    <h5>Producto</h5>
                </div>
            </div>
        </div>
        <div>
            <producto-local v-for="producto in buscarProducto" 
                :key="producto.id"
                :producto="producto"
                class="border-top border-bottom py-3"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            productos:[
                {
                    id: '0',
                    nombre: "nombre producto 0",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '1',
                    nombre: "nombre producto 1",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '2',
                    nombre: "nombre producto 2",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '3',
                    nombre: "nombre producto 3",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '4',
                    nombre: "nombre producto 4",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '5',
                    nombre: "nombre producto 5",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '6',
                    nombre: "nombre producto 6",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '7',
                    nombre: "nombre producto 7",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '8',
                    nombre: "nombre producto 8",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '9',
                    nombre: "nombre producto 9",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '10',
                    nombre: "nombre producto 10",
                    img: "https://via.placeholder.com/75"
                },
                {
                    id: '11',
                    nombre: "nombre producto 11",
                    img: "https://via.placeholder.com/75"
                }
            ],
            search:''
        }
    },
    computed:{
        buscarProducto:function(){
            return this.productos.filter((prod) =>{
                return prod.id.match(this.search)
            });
        }
    }
}
</script>