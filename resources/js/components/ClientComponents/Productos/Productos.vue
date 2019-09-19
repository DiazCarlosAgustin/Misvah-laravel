<template>
    <div class="row d-flex justify-content-center">
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
        <producto class="col-sm-6 col-md-4 col-lg-3" :class="col"></producto>
    </div>
</template>
<script>
export default {
    name:'productos',
    props:[],
    data(){
        return{
            col:"col-12"
        }
    },
    methods:{
        cambiarClase:function(){
            if(window.innerWidth > 380 && window.innerWidth < 575){
                this.col = 'col-6'
            }
            else{
                this.col = 'col-12'
            }
        }
    },
    created(){
        window.addEventListener('resize',this.cambiarClase)
    }
}
</script>
<style scoped>
    
</style>

