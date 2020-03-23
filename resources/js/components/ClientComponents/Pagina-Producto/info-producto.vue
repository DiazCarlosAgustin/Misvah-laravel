<template>
    <div class="info-producto ">
        <div class="nombre-producto ">
            <h3>Nombre del producto</h3>
        </div>
        <div class="codigo text-muted">
            <h5>Cod-0001</h5>
        </div>
        <div class="precio mt-2 d-inline-flex h4">
            <strike class="text-danger pr-2">$223</strike> - <p class="px-2 text-muted">$200</p>
        </div>
        <div class="colores">
            <p class="h4 text-muted">Colores:</p>
            <div class="color-producto d-flex">
                <color-producto :id="1"></color-producto>
                <color-producto :id="2"></color-producto>
                <color-producto :id="3"></color-producto>
                <color-producto :id="4"></color-producto>
            </div>
        </div>
        <div class="cantidad mb-3 row">
            <div class="col-12">
                <p class="h4 text-muted">Cantidad:</p>
            </div>
            <div class="col-12 col-md-12 col-lg-8">
                <div class="input-group w-100">
                    <div class="input-group-append">
                        <button @click="disminuir()" class="minus btn btn-md mx-0" :style="{background: colorButtons, color:textButtons}">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                    
                    <input class="form-control text-center my-auto mx-0" min="0" name="quantity" v-model="cantidad" type="number">
                    
                    <div class="input-group-append">
                        <button @click="aumentar()" class="plus btn btn-md mx-0" :style="{background: colorButtons, color:textButtons}">
                        <i class="fas fa-plus"></i>
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="comprar row d-flex">
            <div class="col-12 col-xs-12 col-lg-8 my-1">
                <button class="btn btn-block" :style="{background: colorButtons, color:textButtons}"> Añadir al carrito</button>
            </div>
            <div class="col-12 col-lg-8 ">
                <button class="btn btn-block ">
                    <span class=" text-center">
                        Añadir a favoritos 
                        <i class="far fa-heart fa-2x px-2 align-middle"></i>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'info-producto',
    data(){
        return{
            cantidad: 0,
            max:10,
            colorButtons: '#FF637D',
            textButtons: 'white'
        }
    },
    methods:{
        aumentar: function(){
            this.cantidad = this.cantidad + 1;
            if(this.cantidad > this.max){
                this.cantidad = this.cantidad - 1;
            }
            console.log(this.cantidad);
        },
        disminuir: function(){
            this.cantidad -= 1
            if(this.cantidad < 0){
                this.cantidad = 0;
            }
            console.log(this.cantidad);
            
        }
    }
}
</script>
<style scoped>
</style>
