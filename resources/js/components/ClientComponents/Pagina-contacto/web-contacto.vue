<template>
    <div class="row r-contacto text-center  d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-12">
            <div class="h3 mt-5">
                Contacto
            </div>
        </div>
        <div class="col-12 col-xs-12 col-md-6 col-lg-6">
            <div class="form-contacto text-left">
                <form action="">
                    <div class="d-campos py-1">
                        <label class="text-left">Nombre<span class="text-danger">*</span></label>
                        <input class="form-control" type="text" name="txtContactoNombre" id="txtContactoNombre" required placeholder="Nombre">
                    </div>
                    <div class="d-campos py-1">
                        <label class="text-left">Mail<span class="text-danger">*</span></label>
                        <input class="form-control" type="email" name="txtContactoMail" id="txtContactoMail" required placeholder="ejemplo@gmail.com">
                    </div>
                    <div class="d-campos py-1">
                        <label class="text-left">Mensaje<span class="text-danger">*</span></label>
                        <textarea class="form-control" name="txtContactoMensaje" id="txtContactoMensaje" cols="30" rows="8" required placeholder="Mensaje"></textarea>
                    </div>
                    <div class="d-campos py-1   float-right">
                        <input class="btn text-white pink btn-block" type="submit" value="Enviar">    
                    </div>  
                </form>
            </div>
        </div>
        <div class="d-mapa col-12 col-xs-12 col-md-6 col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1012.2843372158017!2d-64.18584644712581!3d-31.416739211326266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x93f297da8d9e049e!2sAccesorios+Misvah!5e0!3m2!1ses-419!2sar!4v1553545626862" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    
    </div>
</template>
<script>
    export default {
     name: 'web-contacto'   
    }
</script>
<style scoped>
    .d-mapa iframe{
        width: 100%;
        height: 100%;
    }
</style>