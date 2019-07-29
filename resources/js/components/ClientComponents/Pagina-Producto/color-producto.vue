<template>
    <div class="colores">
        <select name="cbColores" id="cbColores" v-model="selectColor" class="custom-select mb-3">
            <option v-for="color in colores" :key="color.id">{{color.nombre}}</option>
        </select>
    </div>
</template>
<script>
export default {
    name:'color-producto',
    data(){
        return{
            selectColor:'Rojo',
            colores:[
                {
                    id:1,
                    nombre:'Rojo'
                },
                {
                    id:2,
                    nombre:'Negro'
                },
                {
                    id:3,
                    nombre:'Gris'
                },
                {
                    id:4,
                    nombre:'Verde'
                },
            ]
        }
    }
}
</script>
<style scoped>
    
</style>
