
<template>
    <div class="color m-2">
        <label>
            <input  class="form-check-input" type="radio" name="exampleRadios" :id="id" value="option2" >
            <img src="https://via.placeholder.com/45x45.png" alt="Color">
        </label>    
    </div>
</template>
<script>
//   Fecha          User        
// 13/08/19     Agustin Diaz        cambie para imagen, falta solucioner el tema del seleccionado de radio
export default {
    props:['id'],
    name:'color-producto',
    data(){
        return{
            
        }
    },
    methods:{
        selectImg(){
            alert("g")
        }
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
