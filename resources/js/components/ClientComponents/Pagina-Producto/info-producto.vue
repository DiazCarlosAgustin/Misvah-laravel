<template>
    <div class="info-producto ml-auto">
        <div class="nombre-producto h4">
            Nombre del producto
        </div>
        <div class="codigo h6 text-muted">
            Cod-0001
        </div>
        <div class="precio mt-2 d-inline-flex h5">
            <strike class="text-danger pr-2">$223</strike> - <p class="px-2 text-muted">$200</p>
        </div>
        <div class="colores">
            <p class="h5 w-100 text-muted">Colores:</p>
            <div class="color-producto d-flex">
                <color-producto></color-producto>
            </div>
        </div>
        <div class="descripcion p text-muted text-justify">
           <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
        </div>
        <div class="comprar d-inline-flex row ml-auto">
            <div class="cantidad d-flex input-group my-auto ml-0 pl-0 col-12 col-xs-12 col-md-4">
                <div class="input-group-prepend">
                    <span class="input-group-text" @click="aumentar()" :style="{background: colorButtons, color:textButtons}">
                        <i class="fas fa-plus"></i>
                    </span>
                </div>
                <input type="number" name="txtCantidad" id="txtCantidad" class="my-auto form-control" v-model.number="cantidad" :min="1" :max="10">
                <div class="input-group-append">
                    <span class="input-group-text" @click="disminuir()" :style="{background: colorButtons, color:textButtons}">
                        <i class="fas fa-minus"></i>
                    </span>
                </div>
            </div>
            <div class="col-12 col-xs-12 col-md-8 ">
                <button class="btn" :style="{background: colorButtons, color:textButtons}"> Añadir al carrito</button>
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
        },
        disminuir: function(){
            this.cantidad -= 1
            if(this.cantidad < 0){
                this.cantidad = 0;
            }
        }
    }
}
</script>
<style scoped>
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
</style>
