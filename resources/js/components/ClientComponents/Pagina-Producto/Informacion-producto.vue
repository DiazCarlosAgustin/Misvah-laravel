<template>
    <div class="col-12 col-md-10 mt-4">
        <div class="head-info text-center">
           <h4>Información</h4>
        </div>
        <div class="body-info text-center">
            <p class="text-muted">
               {{info}}
            </p> 
        </div>
    </div>
</template>
<script>
export default {
    props:['info'],
    data(){
        return{}
    }
}
</script>
<style scoped>
    .body-info{
        text-overflow:ellipsis;
    }
</style>
