<template>        
    <tr>
        <td>{{producto.codigo}}</td>
        <td>{{producto.nombre}}</td>
        <td>
            <select class="browser-default custom-select" 
                v-model="categoria" @change="cambioCategoria">
                <option v-for="categoria in allCategorias" 
                    :key="categoria.id" 
                    :value="categoria.id">
                    {{categoria.nombre}}
                </option>
            </select>
        </td>
        <td>{{producto.precio}}</td>
        <td>{{producto.descripcion}}</td>
        <td>{{producto.informacion}}</td>
    </tr>
</template>
<script>
export default {
    name:'lista-nuevo-producto',
    props:['producto','categorias'],
    data() {
        return {
            categoria: this.producto.categoria
        }
    },
    mounted() {
        this.cambioCategoria()
    },
    methods: {
        cambioCategoria: function(){
            this.$emit("cambioCategoria",this.categoria)
        }
    },
    computed: {
        allCategorias(){
            return this.categorias
        }
    },
}
</script>