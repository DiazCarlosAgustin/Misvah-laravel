<template>
    <span @click:native="categoriaHover" @click="categoriaHover">{{categoria.nombre}}</span>
</template>
<script>
export default {
    name:'menu-categoria',
    props:['categoria'],
    data(){
        return{}
    },
    methods:{
        categoriaHover: function(){
            this.$emit('categoriaSelect',this.categoria)
        },
    }
}
</script>
<style scoped>
    span{
        display: block;
        width: 100%;
        padding: 10px 0;
        text-align: center;
        margin: 0;
    }
    span:hover{
        cursor: pointer;
        background-color: #F7A399;
        color: white;
        transition: .5s all ease-in-out;
    }
</style>