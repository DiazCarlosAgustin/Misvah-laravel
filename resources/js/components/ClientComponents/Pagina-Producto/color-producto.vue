<template>
    <div class="color m-2" v-if="stockColor() == true">
        <label>
            <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                :id="id"
                value="option2"
                :checked="index == 0"
                @click="handlerColor"
            />
            <img
                class="img"
                :src="`../../../img/colores/${color.imagen_color}`"
                width="45"
                height="45"
                :alt="color.descripcion"
            />
        </label>
    </div>
</template>
<script>
export default {
    props: ["id", "color", "index"],
    name: "color-producto",
    data() {
        return {
            selected : false
        };
    },
    mounted(){
        this.colorStart()
    },
    methods: {
        colorStart:function(){
            if (this.index == 0) {
                this.handlerColor();
            }
        },
        stockColor:function(){
            if(this.color.stock_color != null){
                if(this.color.stock_color.stock > 0 ){
                    return  true
                }
            }
            else{
                return false
            }
        },
        handlerColor: function () {
            this.$emit("handlerColor", this.index);
        },
    },
};
</script>
<style scoped>
.img {
    border-radius: 5px;
}
[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
}
[type="radio"] + img {
    cursor: pointer;
}

[type="radio"]:checked + img {
    -webkit-box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.45);
    -moz-box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.45);
    box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.45);
}
</style>
