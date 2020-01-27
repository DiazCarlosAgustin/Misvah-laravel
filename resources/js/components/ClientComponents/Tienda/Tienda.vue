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
                <ajustes class="my-2"
                    :categorias="categorias"/>
            </div>
        </div>
        <productos :productos="productos" />
        <div class="row my-3 d-flex justify-content-center">
            <btn-paginacion v-for="index in last" :key="index" 
                :actual="currentPage"
                :number="index"
                :http="http+index" @next="actualPage"/>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            categorias:[],
            productos:[],
            primera:'',
            siguiente:'',
            ultima:'',
            current:1,
            last:1,
            http:'http://127.0.0.1:8000/api/producto?page='
        }
    },
    beforeMount() {
         this.getCategorias()
        this.getProductos()
    },
    methods: {
        getCategorias:function(){
            axios.get('http://127.0.0.1:8000/api/categoria')
            .then(res => {
                this.categorias = res.data
           })
            .catch(err =>{
                console.log(err)
            })
        },
        getProductos:function(){
            axios.get('http://127.0.0.1:8000/api/producto')
                .then(res => {
                    this.productos = res.data.data
                    this.primera = res.data.first_page_url
                    this.siguiente = res.data.next_page_url
                    this.ultima = res.data.last_page_url
                    this.current = res.data.current_page
                    this.last = res.data.last_page
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        },
        actualPage: function($res){          
            this.productos = $res.data
            this.primera = $res.first_page_url
            this.siguiente = $res.next_page_url
            this.ultima = $res.last_page_url
            this.current = $res.current_page
            this.last = $res.last_page
        }
    },
    computed: {
        listProduct: function(){
            return this.categorias
        },
        currentPage: function(){
            return this.current
        },
    },
}
</script>