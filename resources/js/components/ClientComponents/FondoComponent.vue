<template>
    <div id="fondo" class="view">
        <img :src="img">
        <div class="d-centro">
            <div class="Titulo animated fadeIn">MISVAH</div>
            <div class="sub-titulo animated fadeIn">MODA</div>
            <div class="botones mx-auto d-flex aling-center">
                <button class="btn animated fadeIn">CONTACTO</button>    
                <button class="btn animated fadeIn">PRODUCTOS</button>    
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name:'fondo',
    data(){
        return{
            img: '/img/Fondo-3.jpg'
        }
    }
}
</script>
<style scoped>
    #fondo{
        height: 100vh;
        background: no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    #fondo img{
        width: 100%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
    }
    /*contenido que va dentro de la imagen*/
    #fondo .d-centro{
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    #fondo .d-centro .Titulo{
        font-family: Impact, Charcoal, sans-serif !important;
        font-size: 80px;
        color:white;
        padding: 0;
        margin: 0;
    }
    #fondo .d-centro .sub-titulo{
        text-align: center;
        font-family: 'Gabriela', serif;
        font-size: 40px;
        color:white;
        padding: 0 0 10px 0;
        margin-top: -20px;
    }
    #fondo .d-centro .botones{
        position: absolute;
        left: 0;
        transform: translateX(2%);
    }
    #fondo .d-centro .botones .btn{
        margin: 0 2px;
        background-color: white;
        border-radius: 50px;
    }
    #fondo .d-centro .botones {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
