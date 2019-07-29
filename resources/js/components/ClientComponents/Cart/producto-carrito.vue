<template>
    <tr class=" align-middle border-bottom">
        <td class="align-middle"><img src="https://via.placeholder.com/75x75.png" alt=""></td>
        <td class="align-middle"><h6>Nombre del producto</h6></td>
        <td class="align-middle ">
            <form action="">
                <input type="number" name="txtCantidad" id="txtCantidad" min="1" max="" @change="sumarizar()" value="1" v-model.number="cantidad" class="form-control text-center mx-auto">
            </form>
        </td>
        <td class="align-middle">
            Rojo
        </td>
        <td class="align-middle"><h6>350</h6></td>
        <td class="align-middle"><h6>{{total}}</h6></td>
        <td class="align-middle">
            <button class="btn btn-danger btn-sm">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    </tr>
</template>
<script>
    export default {
        name:'producto-carrito',
        data(){
            return{
                precio: 350,
                total: 350,
                cantidad: 1
            }
        },
        methods:{
            sumarizar: function(){
                this.total = this.precio * this.cantidad
            }
        }
    }
</script>
<style scoped>
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
