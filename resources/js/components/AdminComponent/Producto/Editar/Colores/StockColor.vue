<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12  border-bottom pb-4">
        <h3 class="text-center text-muted mt-2">Agregar stock a un color</h3>
        <form action="" >
            <div class="form-group">
                <label for="cbColor">Color:</label>
                <select name="cbColor" id="cbColor" class="custom-select">
                    <option v-for="color in colores" :key="color.id">{{color.nombre}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="txtStock">Stock:</label>
                <input type="number" name="txtStock" id="txtStock" class="form-control" value="1" min="0">
            </div>
            <div class="text-center">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'stock-color',
    data(){
        return{
            colores:[
            {
                id:1,
                nombre: 'rojo',
                stock: 10
            },
            {
                id:2,
                nombre: 'negro',
                stock: 3
            },
            {
                id:3,
                nombre: 'gris',
                stock: 7
            }
        ]
        }
    }
}
</script>