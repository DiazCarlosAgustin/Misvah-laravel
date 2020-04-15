<template>
    <div class="table-responsive">
        <table class="table table-striped table-md">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                <elemento-fondo
                    v-for="(imagen, index) in imagenes"
                    :key="index"
                    :imagen="imagen"
                    @estadoFondo="estadoFondo(index,...arguments)"
                ></elemento-fondo>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: ["imagenes"],
    data() {
        return {};
    },
    methods: {
        estadoFondo: function($i,$estado){
            this.imagenes[$i].estado = $estado
            this.$emit("estadoFondo",$i,$estado)
        }
    },
};
</script>
