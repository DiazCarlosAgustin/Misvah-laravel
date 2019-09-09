<template>
    <div class="row r-registrarse text-center d-flex justify-content-center">
        <div class="col-12 col-sm-12 col-md-6">
            <div class="my-4 ">
                <h2>Registrarse</h2>    
            </div>
            <div class="form-registrarse text-left">
                <form action="">
                    <div class="d-campos py-1">
                        <label class="text-left">Nombre <span class="text-danger"> * </span></label>
                        <input class="form-control mb-2" type="text" name="txtRegistrarseNombre" id="txtRegistrarseNombre" placeholder="Nombre">
                    </div>
                    <div class="d-campos py-1">
                        <label class="text-left">Email  <span class="text-danger"> * </span></label>
                        <input class="form-control mb-2" type="email" name="txtRegistrarseMail" id="txtRegistrarseMail" placeholder="Email">
                    </div>
                    <div class="d-campos py-1">
                        <label class="text-left">Telefono  <span class="text-danger"> * </span></label>
                        <input class="form-control mb-2" type="tel" name="txtRegistrarseTelefono" id="txtRegistrarseTelefono" placeholder="Telefono">
                    </div>
                    <div class="d-campos py-1">
                        <label class="text-left">Contraseña  <span class="text-danger"> * </span></label>
                        <input class="form-control mb-2" type="password" name="txttRegistrarsePassword" id="txttRegistrarsePassword" placeholder="Contraseña">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-block my-4 pink" :style="{color:textcolor}" type="submit">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'web-registrarse',
        data(){
        return{
            // bgcolor: '#ffb4ac',
            textcolor: '#fff'
        }
    }
}
</script>