<template>
    <tr class=" align-middle border-bottom">
        <td class="align-middle">
            <img :src="producto.imgProducto" alt="">
        </td>
        <td class="align-middle">
            <h6>{{producto.producto}}</h6>
        </td>
        <td class="align-middle ">
            <form action="">
                <input type="number" @change="SubT" name="txtCantidad" id="txtCantidad" min="1" max=""
                    v-model.number="producto.cantidad"  class="form-control border-0 text-center mx-auto">
            </form>
        </td>
        <td class="align-middle">
            <img :src="producto.color" alt="">
        </td>
        <td class="align-middle">
            <h6>${{producto.precio}}</h6>
        </td>
        <td class="align-middle"><h6>{{subTotal}}</h6></td>
        <td class="align-middle">
            <i class="fas fa-trash" @click="EliminarProducto()"></i>
        </td>
    </tr>
</template>
<script>
    export default {
        name:'producto-carrito',
        props:['producto'],
        data(){
            return{
                total:0
            }
        },
        methods:{
            SubT: function(){
                // emite la funcion SubTotal para modificar el SubTotal en el componente padre
                this.$emit('subTotal',this.subTotal)
            },
            EliminarProducto: function(){
                console.log(1);
                this.$emit('EliminarProducto')
                
            }
        },
        computed: {
            subTotal:function(){
                // calcula el subTotal de cada producto
                return this.producto.subtotal = this.producto.cantidad * this.producto.precio
            }
        },
    }
</script>
<style scoped>
    .fa-trash{
        font-size: 1.2em;
    }
    .colores div{
        display: inline-block;
    }
    .colores input[type="radio"]{
        display: none;
    }

    .colores input[type="radio"] + label span{
        display: inline-block;
        width: 40px;
        height: 40px;
        margin: -1px 4px 0 0;
        vertical-align: middle;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .33);
    }
    span .fa-check{
        color: transparent;
        margin-top: 10px;
    }
    .colores input[type="radio"]:checked + label span{
        opacity: .3;
    }
    .colores input[type="radio"]:checked + label span .fa-check{
        color:white;
    }
</style>
