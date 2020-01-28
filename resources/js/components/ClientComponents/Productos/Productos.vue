<template>
    <div class="row d-flex justify-content-center">
        <producto class="col-sm-6 col-md-4 col-lg-3" 
            v-for="(producto,index) in productos" :key="producto.id"
            :producto="producto"
            :class="col" 
            @productoFavorito="favorito(index,...arguments)"/>
    </div>
</template>
<script>
export default {
    name:'productos',
    props:[],
    data(){
        return{
            col:"col-12",
            productos:[],
        }
    },
    beforeMount() {
        this.getProductos()
    },
    methods:{
        getProductos:function(){
            axios.get('http://127.0.0.1:8000/api/producto')
                .then(res => {
                    this.productos = res.data.data
                    console.log(res.data.data)
                })
                .catch(err =>{
                    console.log(err);
                })
        },
        cambiarClase:function(){
            if(window.innerWidth > 375 && window.innerWidth < 575){
                this.col = 'col-6'
            }
            else{
                this.col = 'col-12'
            }
        },
        favorito: function($id,$favorito){
            this.productos[$id].favorito = $favorito      
        }
    },
    created(){
        window.addEventListener('resize',this.cambiarClase)
    }
}
</script>
<style scoped>
</style>

