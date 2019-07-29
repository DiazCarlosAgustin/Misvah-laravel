<template>
    <div>
        <li class="list-group-item px-0 border-bottom">
            <div class="card-product">
                <div class="row">
                    <div class="col-12 w-100 d-flex h-100">
                        <div class="col-4">
                            <img src="https://via.placeholder.com/75x75.png" alt="">
                        </div>
                        <div class="col-8">
                            <div class="d-flex">
                                <div class="name-producto d-block text-center">
                                    <h5>Nombre del producto</h5>
                                </div>
                                <span class="ml-auto">
                                    <i class="fas fa-trash-alt"></i>
                                </span>
                            </div>
                            
                            <div class="detalles w-100 h-100 d-flex ">
                                    <div class="d-flex mr-auto">
                                        <form action="">
                                            <div class="form-group d-flex">
                                                <p class="pr-1 mt-3">Cantidad:</p>
                                                <input type="number" name="numCantidad" @change="sumarizar()" id="numCantidad" v-model="cantidad" class="my-auto" min="1" value="1">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="d-flex ml-auto">
                                        <p class=" mt-3">${{total}}</p>  
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>
<script>
export default {
    name: 'item-carrito',
    data(){
        return{
            cantidad: 1,
            precio: 350,
            total:350
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
    #numCantidad{
        width: 50px !important;
        height: 30px !important;
        border: none;
    }
    #txtCantidad{
        width: 70px !important;
    }
</style>
