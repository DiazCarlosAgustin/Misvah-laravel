<template>
    <button class="btn btn-sm" 
        :class="{'activo' : actual == number}"
        @click="next">
        {{number}}
    </button>
</template>
<script>
export default {
    props:['actual','number','http'],
    data() {
        return {
            activo:'activo'
        }
    },
    methods: {
        next: function(){
            axios.get(this.http)
                .then(res =>{
                    this.$emit('next',res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    computed: {
    },
}
</script>
<style scoped>
    .activo{
        background-color: #f23 !important; 
        color: white !important;
        pointer-events:none;
    }
</style>