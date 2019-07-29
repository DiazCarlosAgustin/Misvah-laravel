<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12 mt-4 ">
        <h3 class="text-muted text-center">Generar Oferta</h3>
        <form action="">
            <div class="form-group">
                <label for="txtCuponDescuento">% en descuento: </label>
                <input type="text" name="txtCuponDescuento" id="txtCuponDescuento" class="form-control" placeholder="%">
            </div>
            <div class="form-group">
                <label for="txtCuponDescuento">Desde: </label>
                <input type="date" name="dtDesdeDescuanto" id="dtDesdeDescuanto" class="form-control ">
            </div>
            <div class="form-group">
                <label for="ctDescuentoHasta">Hasta: </label>
                <input type="date" name="ctDescuentoHasta" id="ctDescuentoHasta" class="form-control">
            </div>
            <div class="form-group text-center">
                    <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>