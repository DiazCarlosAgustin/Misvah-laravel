<template>
    <label class="m-1">
        <input type="radio" name="color" class="form-check-input" @click="handleClick">
        <img :src="`../../../img/colores/${color.imagen_color}`" :alt="color.description" width="45">
    </label>
</template>
<script>
export default {
    name:'lista-color',
    props:['color'],
    data(){
        return{}
    },
    methods:{
        handleClick:function(){
            this.$emit('selectColor',this.color.id)
        }
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
</style>