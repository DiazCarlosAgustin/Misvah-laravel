<template>
    <div class="justify-content-center">
        <label for="CbMetodoOrdenado">Ordenar por:</label>
        <select id="CbMetodoOrdenado" class="browser-default custom-select">
            <option selected>Seleccione un metodo</option>
            <option value="1">Menor a mayor precio</option>
            <option value="2">Mayor a menor precio</option>
            <option value="3">Fecha de publicacion</option>
            <option value="4">Categoria 4</option>
            <option value="5">Categoria 5</option>
        </select>
    </div> 
</template>
<style scoped>
    .filtro{
        width: 100% !important;
        margin:0;
    }
    button{
        box-shadow: none !important;
    }
</style>
