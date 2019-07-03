<template>
    <div class="">
        <div class="h3 text-center mt-4">Instagram</div>
        <div class="swiper-container">
            <div class="swiper-wrapper mb-4">
                <foto-instagram class=" animated fadeIn"></foto-instagram>
                <foto-instagram class=" animated fadeIn"></foto-instagram>
                <foto-instagram class=" animated fadeIn"></foto-instagram>
                <foto-instagram class=" animated fadeIn"></foto-instagram>
                <foto-instagram class=" animated fadeIn"></foto-instagram>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination mt-5"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'instagram'
}
</script>   
<style scoped>
/*estilo de swiper.js*/
    .swiper-container {
        width: 100%;
        height: 350px;
    }
    .swiper-slide {
        height:350px !important;
        text-align: center;
        font-size: 18px;
        background:white !important;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    /*div instagram*/
    .d-instagram{
        position: relative;
    }
    .Titulo-instagram{
        padding: 35px 0 0px 0;
        font-family: Impact, Charcoal, sans-serif !important;
        font-size: 45px;
        text-align: center;
    }
    .usuario-intagram{
        font-size: 20px;
        text-align: center;

    }
    .usuario-intagram a{
        text-decoration: none;
        color:  #353535;
    }
    .card-img-insta{
        height: 240px;
        background-color: #707070;
    }
    .d-instagram .row{
        margin: 25px 0 0 0;
    }
    .card-img-insta .descrip-insta{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        display: none;
    }
    .card-img-insta .descrip-insta a{
        text-decoration: none;
        color: white;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 18px;
    }
    .card-img-insta:hover .descrip-insta{
        opacity: 70%;
        display: flex;
        transition-delay: .3s;
    }

</style>
