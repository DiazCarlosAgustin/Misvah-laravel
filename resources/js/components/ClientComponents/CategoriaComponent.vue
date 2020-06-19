<template>
    <div class="d-flex my-2 justify-content-center">
        <div class="card card-cascade wider">
            <div class="view view-cascade overlay">
                <img
                    class="card-img-top"
                    :src="`../../../img/categorias/${categoria.imagen_categoria}`"
                    alt="Card image cap"
                />
                <a :href="`categoria/${categoria.id}`">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>
            <div class="card-body card-body-cascade text-center">
                <!-- Title -->
                <h6 class="card-title text-muted">Categoria</h6>
                <!-- Subtitle -->
                <h5 class="pb-2">{{ categoria.nombre }}</h5>
                <!-- Text -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["categoria"],
    mounted(){},
};
</script>
<style scoped></style>
