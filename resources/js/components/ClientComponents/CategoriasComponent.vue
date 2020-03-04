<template>
    <div class="d-categoria mt-4">
        <h3 class="text-center p-3">Categorias</h3>
        <div class="row d-flex justify-content-center">
            <div v-for="categoria in categorias" :key="categoria.id"  class="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"> 
                <categoria-component :categoria="categoria"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'categorias',
    data() {
        return {
            categorias:[]
        }
    },
    beforeMount() {
        this.getCategoria()
    },
    methods: {
        getCategoria:function(){
            axios.get('http://127.0.0.1:8000/api/categoria')
                .then(res => {
                    this.categorias = res.data
                })
                .catch(err =>{
                    console.log(err);
                    
                })
        }
    },
}
</script>
<style scoped>
    .d-categoria{
        position: relative;
    }   
    .d-categoria{
        font-family: 'Montserrat', sans-serif;
        font-size: 45px;
        letter-spacing:normal;
        text-align: center;
    }
</style>
