<template>
    <div class="colores">
        <input type="radio" name="radioColor1" id="radioColor1">
        <label for="radioColor1" ><span style="background-color:red;" class="text-center"><i class="fas fa-check"></i></span></label>
        <input type="radio" name="radioColor1" id="radioColor2">
        <label for="radioColor2" ><span style="background-color:black;" class="text-center"><i class="fas fa-check"></i></span></label>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .colores div{
        display: inline-block;
    }
    .colores input[type="radio"]{
        display: none;
    }

    .colores input[type="radio"] + label span{
        display: inline-block;
        width: 40px;
        height: 40px;
        margin: -1px 4px 0 0;
        vertical-align: middle;
        border-radius: 50%;
        border: 2px solid #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .33);
    }
    span .fa-check{
        color: transparent;
        margin-top: 10px;
    }
    .colores input[type="radio"]:checked + label span{
        opacity: .3;
    }
    .colores input[type="radio"]:checked + label span .fa-check{
        color:white;
    }
</style>
