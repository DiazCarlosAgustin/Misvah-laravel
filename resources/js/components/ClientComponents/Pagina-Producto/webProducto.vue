<template>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 text-center">
                <div class=" text-center my-4">
                    <h2>Producto</h2>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-7 col-lg-7 d-flex">
                <swiper-fotos-producto
                    class="text-center"
                ></swiper-fotos-producto>
            </div>
            <div class="col-12 col-md-5 col-lg-5 ">
                <info-producto></info-producto>
            </div>
        </div>
        <div class="row mt-3 d-flex justify-content-center">
            <informacion-producto></informacion-producto>
        </div>
        <div class="row mt-5 mx-auto">
            <productos-relacionados></productos-relacionados>
        </div>
    </div>
</template>
<script>
export default {
    props: ["producto"]
};
</script>
<style scoped></style>
