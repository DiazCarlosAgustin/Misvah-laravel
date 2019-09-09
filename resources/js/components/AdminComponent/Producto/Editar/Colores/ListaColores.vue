<template>
    <label class="m-1">
        <input type="radio" name="color" id="" class="form-check-input">
        <img src="https://via.placeholder.com/55x55.png" alt="">
    </label>
</template>
<script>
export default {
    name:'lista-color',
    props:['color'],
    data(){
        return{}
    }
}
</script>
<style scoped>
       [type="radio"] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    [type="radio"] +  img {
        cursor: pointer;
    }

    [type="radio"]:checked + img{
        outline: 2px solid #fd6d6df2;
    }
</style>