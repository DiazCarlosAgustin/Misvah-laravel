<template>
    <!-- <img src="https://via.placeholder.com/75x75.png" alt=""> -->
    <div class="container-producto">
        <div class="img-producto my-auto">
            <img :src="producto.imagen">
        </div>
        <div class="des-producto">
            <div class="r-1">
                <div class="eliminar-producto my-auto text-center" @click="eliminar">
                    <i class="fas fa-trash-alt"></i>
                </div>
                <div class="titulo-producto text-center">
                    <h5>{{producto.nombre}}</h5>
                </div>
            </div>
            <div class="color-producto d-flex align-middle">
                <h6 class="text-muted ">Color: <span> <img :src="producto.color"> </span> </h6>               
            </div>
            <div class="r-2">
                <div class="cantidad-producto d-flex align-middle">
                    <h6 class="text-muted ">Cantidad: <span><input @change="emitCantidad()" type="number" name="txtCantidad" id="txtCantidad" class="numCantidad text-right" min="1" v-model="producto.cantidad"></span></h6>
                </div>
                <div class="subtotal text-right pr-2">
                    <h6>${{producto.subtotal}}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'item-carrito',
    props:['producto'],
    data(){
        return{
            cantidad: 1,
            subtotal: 0,
        }
    },
    methods:{
        sumarizar: function(){
            this.total = this.precio * this.cantidad
        },
        emitCantidad: function(){
            this.$emit('Cantidad', this.producto.cantidad)
        },
        eliminar:function(){
            this.$emit("Eliminar")
        }
    }
}
</script>
<style scoped>
    .numCantidad{
        width: 50px !important;
        height: 30px !important;
        border: none;
    }
    #txtCantidad{
        width: 70px !important;

    }
    .container-producto{
        display: grid;
        grid-template-columns: 100px 1fr;
    }
    .img-producto{
        grid-column: 1/2;
        margin: 0 auto; 
    }
    .desc-producto{
        grid-column: 2/3;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-auto-columns: 100%;
    }
    .r-1{
        display:grid;
        grid-row: 1/2;
        grid-template-rows: 1fr;
        grid-template-columns: 90% 10%;
    }
    .r-2{
        display:grid;
        grid-row: 1/2;
        grid-template-rows: 1fr;
        grid-template-columns: 65% 35%;
    }
    .titulo-producto{
        grid-row: 1/2;
        grid-column: 1/2;
    }
    .eliminar-producto{
        grid-row: 1/2;
        grid-column: 2/2;
    }
    .color-producto{
        grid-row: 2/3;
        margin-left: 1em;
        grid-column: 1/2;
    }
    .color-producto span img{
        margin-left: 1em;
    }
    .cantidad-producto{
        grid-row: 1/2;
        margin-left: 1em;
        grid-column: 1/2;
    }
    .subtotal{
        grid-row: 1/2;
        grid-column: 2/2;
    }
</style>
