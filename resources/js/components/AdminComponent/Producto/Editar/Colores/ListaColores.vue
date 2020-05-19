<template>
    <label class="m-1">
        <input type="radio" name="color" class="form-check-input" @click="handleClick" :disabled="color.stock_color || disable">
        <img :src="`../../../img/colores/${color.imagen_color}`" :alt="color.description" width="45" height="35">
    </label>
</template>
<script>
export default {
    name:'lista-color',
    props:['color','id', 'disable'],
    data(){
        return{
            val:false
        }
    },
    methods:{
        handleClick:function(){
            this.$emit('selectColor',this.color.id)
        }
    },
    computed:{
    }
}
</script>
<style scoped>
       [type="radio"] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    [type="radio"] +  img {
        cursor: pointer;
    }

    [type="radio"]:checked + img{
        outline: 2px solid #fd6d6df2;
    }
    .disabled{
        pointer-events: none;
    }
</style>