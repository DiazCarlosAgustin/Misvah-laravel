<template>
   <div class="justify-content-center">
       <label for="CbCategoria">Categorias:</label>
       <select id="CbCategoria" class="browser-default custom-select" v-model="cat" @change="newCat">
            <option value="0" selected>Seleccione una categoria</option>
            <option v-for="categoria in categorias" :key="categoria.id"
                :value="categoria.id">{{categoria.nombre}}</option>
        </select>
    </div> 
</template>
<script>
export default {
    props:{
        categorias:{
            type:Array,
        },
        id:{
            type:Number
        }
    },
    data() {
        return {
            cat: this.id
        }
    },
    methods:{
        newCat(){
            this.$emit("changeCategoria",this.cat)
        }
    }
}
</script>
<style scoped>
    .filtro{
        width: 100% !important;
        margin:0;
    }
    button{
        box-shadow: none !important;
    }
</style>

