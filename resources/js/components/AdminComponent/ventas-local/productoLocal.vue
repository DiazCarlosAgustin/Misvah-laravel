<template>
    <div class="row d-flex justify-content-center mt-3">
        <div class="col-12">
            <div class="row ">
                <div class="col-12 col-md-5 col-lg-4 d-flex h-100 my-auto">
                    <div class="imagen mx-2">
                        <img :src="producto.img" alt="">
                    </div>
                    <div class="nombre  align-middle">
                        <h5 class="my-auto">{{producto.nombre}}</h5>
                    </div>
                </div>
                <div class="col-12 col-md-7 col-lg-8">
                    <div class="colores d-flex row">
                        <color-local v-for="color in colorProducto" 
                            :key="color.id"
                            :color="color"/>
                    </div>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-12 text-right">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['producto'],
    data() {
        return {
            colores:
            [
            {
                id: '0',
                producto: '0',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:5
            },
            {
                id: '1',
                producto: '0',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:4
            },
            {
                id: '2',
                producto: '1',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:3
            },
            {
                id: '3',
                producto: '1',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:2
            },
            {
                id: '4',
                producto: '0',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:8
            },
            {
                id: '5',
                producto: '2',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:1
            },
            {
                id: '6',
                producto: '3',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:7
            },
            {
                id: '7',
                producto: '4',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:11
            },
            {
                id: '8',
                producto: '5',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:12
            },
            {
                id: '9',
                producto: '8',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:1
            },
            {
                id: '10',
                producto: '9',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:3
            },
            {
                id: '11',
                producto: '9',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:4
            },
            {
                id: '12',
                producto: '10',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:1
            },
            {
                id: '13',
                producto: '11',
                img:"https://via.placeholder.com/40/0000FF/808080",
                stock:2
            }
            ]
        }
    },
    computed:{
        colorProducto:function(){
            return this.colores.filter((color) =>{
                return color.producto.match(this.producto.id)
            })
        }
    }
}
</script>
<style lang="css" scoped>
    .nombre,.imagen{
        display: flex;
        align-self:center;
    }
</style>