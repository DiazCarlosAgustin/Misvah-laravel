<template>
    <footer class="f-foot  animated fadeIn pink">
        <div class="container">
            <div class="row">
                <div class="f-horarios col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div class="f-contenido">
                        <h1>HORARIOS</h1>
                        <div class="mx-auto ">
                            <table class="mx-auto text-white">
                                <tr>
                                    <td>lun.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Mar.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Mié.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Jue.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Vie.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Sáb.:</td>
                                    <td>8:30 - 20:00</td>
                                </tr>
                                <tr>
                                    <td>Dom.:</td>
                                    <td>Cerrado</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="f-redes col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div class="f-contenido">
                        <h1>NUESTRAS REDES</h1>
                        <div class="mx-auto iconos">
                            <i class="fab fa-facebook f-icon"></i>
                            <i class="fab fa-instagram f-icon"></i>
                            <i class="fas fa-envelope f-icon"></i>
                        </div>
                    </div>
                </div>
                <div class="f-enlaces col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4">
                    <div class="f-contenido mx-auto">
                        <h1>ENLACES</h1>
                        <div class="mx-auto">
                            <table class="mx-auto">
                                <tr><td><a href="/">Inicio</a></td></tr>
                                <tr><td><a href="/tienda">Tienda</a></td></tr>
                                <tr><td><a href="/contacto">Contacto</a></td></tr>
                            </table>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .f-foot{
        position: relative;
        bottom: 0;
        background-color: #FF3B3BCC;
        padding: 20px;
        margin-top: 100px;
    }
    .f-horarios, .f-redes,.f-enlaces{
        color:white;
        text-align: center;
    }

    .f-icon{
        font-size: 35px;
        padding: 15px 20px;
        cursor: pointer;
    }
    .f-enlaces table a{
        text-decoration: none;
        color: white;
    }
    .f-enlaces table td{
        padding: 5px 0;
    }
    .f-foot table{
        font-size: 22px;
    }

</style>