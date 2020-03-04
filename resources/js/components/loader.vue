<template>
   <center v-show="active">
       <div class="contenido">
           <div class="circle"></div>
           <div class="circle"></div>
           <div class="circle"></div>
       </div>
   </center>
</template>
<script>
export default {
    props:{
        active:Boolean = true
    }
}
</script>
<style scoped>
    .contenido{
        justify-self: center;
        display: inline-flex;
    }
    .circle{
        display: flex;
        margin: 0 5px;
        background-color: #E44652;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .circle:nth-child(1){
        animation: animation 1.5s infinite 0s ease-in-out;
    }
    .circle:nth-child(2){
        animation: animation 1.5s infinite .2s ease-in-out;
    }
    .circle:nth-child(3){
        animation: animation 1.5s infinite .4s ease-in-out;
    }
    @keyframes animation{
        from{
            opacity: 1;
            transform: scale(.5);
        }
        to{
            opacity: 0;
            transform: scale(1);
        }
    }
</style>