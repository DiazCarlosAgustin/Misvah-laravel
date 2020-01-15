<template>
    <div class="container">
        <div class="row text-center  d-flex justify-content-center">
            <div class="col-12 col-sm-12 col-lg-8">
                <div class=" text-center my-4">
                    <h2>Tienda</h2> 
                </div>      
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12">
                <ajustes class="mb-2"
                    :categorias="categorias"/>
            </div>
        </div>
        <productos />
        <div class="row mt-4 mb-0">
            <paginacion></paginacion>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            categorias:[]
        }
    },
    beforeMount() {
        axios.get('http://127.0.0.1:8000/api/categoria')
            .then(res => {
                this.categorias = res.data
            })
            .catch(err =>{
                console.log(err)
            })
    },
}
</script>