<template>
    <div id="fondo" :style="{backgroundImage:'url(' + img + ')' }" class="view">
        <div :class="align">
            <div class="Titulo" :style="{color:colorTitulo}">
                Misvah
            </div>
            <div class="sub-titulo" :style="{color:colorSubtitulo}">
                Moda
            </div>
            <div class="botones d-flex aling-center">
                <a href="/contacto" class="btn" :style="{backgroundColor:colorBoton}">CONTACTO</a>    
                <a href="/tienda" class="btn" :style="{backgroundColor:colorBoton}">PRODUCTOS</a>    
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name:'fondo',
    data(){
        return{
            img: '/img/Fondo-3.jpg',
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
        height: 90vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    /*contenido que va dentro de la imagen*/
    .d-center{
        position:absolute;
        height: auto; 
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
    .d-left{
        position: absolute;
        top: 50%;
        left: 7%;
        transform: translate(-7%,-50%);
        text-align:left;
    }
    .d-right{
        position:absolute;
        top: 50%;
        left: 95%;
        transform: translate(-95%,-50%);
        text-align: right !important;
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
