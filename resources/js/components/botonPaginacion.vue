<template>
    <span>
        <button v-for="number in pageNumber" :key="number" class="btn btn-sm" 
            :class="isActive == number ? 'btn-primary' : ''"
            @click="next(number)">
            {{number}}
        </button>
    </span>
</template>
<script>
export default {
    props:['pagination'],
    data() {
        return {
            offset:3,
            page:0
        }
    },
    methods: {
        next: function(number){
            this.$emit('changePage',number)
        }
    },
    computed:{
        isActive:function(){
            return this.pagination.current_page
        },
        pageNumber:function(){
            if(!this.pagination.to){
                return []
            }
            var from = this.pagination.current_page - this.offset

            if (from < 1) {
                from  = 1
            }

            var to = from  + (this.offset * 2)

            if(to >= this.pagination.last_page){
                to = this.pagination.last_page
            }
            var pagesArray =[]

            while(from <= to){
                pagesArray.push(from)
                from++
                
            }
            
            return pagesArray
        }
    }
}
</script>
<style scoped>
    .activo{
        background-color: #f23 !important; 
        color: white !important;
        pointer-events:none;
    }
</style>