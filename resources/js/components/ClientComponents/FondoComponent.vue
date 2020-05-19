<template>
    <div id="fondo" :style="{backgroundImage:'url(/img/fondos/' + fondo.imagen + ')' }" class="view">
        <div :class="align">
            <div class="Titulo" :style="{color:colorTitulo}">
                Misvah
            </div>
            <div class="sub-titulo" :style="{color:colorSubtitulo}">
                Moda
            </div>
            <div class="botones d-flex">
                <a href="/contacto" class="btn" :style="{backgroundColor:colorBoton}">CONTACTO</a>    
                <a href="/tienda" class="btn" :style="{backgroundColor:colorBoton}">PRODUCTOS</a>    
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name:'fondo',
    props:['fondo'],
    data(){
        return{
            align: 'd-center',
            colorTitulo:'white',
            colorSubtitulo:'white',
            colorBoton: 'white'
        }
    }
}
</script>
<style scoped>
    #fondo{
        max-height: calc(100vh - 60px);
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    /*contenido que va dentro de la imagen*/
    .d-center{
        position:absolute;
        height: auto;
        width: 100%;
        align-self: center !important;
        top: 50%;
        transform: translateY(-70%);
        justify-self: center;
        text-align: center;
    }
    .d-left{
        position: absolute;
        left: 10%;
        top:50%;
        transform: translate(-10%,-70%);
    }
    .d-right{
        position:absolute;
        top: 50%;
        right: 10%;
        transform: translate(-10%,-70%);
    }
    .Titulo{
        font-family: 'Cormorant Garamond', serif;
        font-size: 6em;
        padding: 0;
        margin: 0;
    }
    .sub-titulo{
        font-family: 'Cormorant Garamond', serif;
        font-size: 3em;
        margin-top: -35px;
        margin-bottom: 20px;
    }
    .botones{
        position: absolute;
        left: 0;
        transform: translateX(2%);
    }
    .botones .btn{
        margin: 0 2px;
    }
    .botones {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
