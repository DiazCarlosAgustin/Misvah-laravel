<template>
    <div class="color d-flex col-6 col-xs-4 col-md-4 col-lg-3 my-2">
        <img :src="color.img" alt="">
        <input type="text" name="txtStock" id="txtStock" 
            class="mx-2 form-control"  v-model="color.stock">
    </div>
</template>
<script>
export default {
    props:['color'],
    data(){
        return{
        }
    }
}
</script>