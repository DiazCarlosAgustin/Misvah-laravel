<template>
    <a :href="`/producto/${producto.id}`" v-if="producto != null">
        <span>{{ producto.nombre }}</span>
    </a>
</template>
<script>
export default {
    name: "menu-item-categoria",
    props: ["producto"],
    data() {
        return {};
    }
};
</script>
<style scoped>
@media (max-width: 991px) {
    a {
        display: block;
        width: 100%;
        padding: 10px 0;
        color: inherit;
    }
}
@media (min-width: 992px) {
    a {
        display: inline-flex;
        width: 50%;
        padding: 10px 0;
        color: inherit;
    }
}
span {
    width: 100%;
    text-align: center !important;
}
a:hover {
    cursor: pointer;
    background-color: #f7a399;
    color: white;
    transition: 0.5s all ease-out;
}
</style>
