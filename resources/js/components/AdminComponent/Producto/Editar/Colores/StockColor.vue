<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12  border-bottom pb-4">
        <h3 class="text-center text-muted mt-2">Agregar stock a un color</h3>
        <form @submit.prevent="postStock" >
            <div class="form-group">
                <label for="cbColor">Color:</label>
                    <lista-color v-for="color in colores" :color="color" 
                        :key="color.id" 
                        @selectColor="selectColor"/>   
            </div>
            <div class="form-group">
                <label for="txtStock">Stock:</label>
                <input type="number" name="txtStock" id="txtStock" class="form-control" v-model="stock" min="0">
            </div>
            <div class="text-center">
                <button type="reset" class="btn btn-danger"><i class="fas fa-times"></i></button>
                <button type="submit" class="btn btn-success"><i class="fas fa-check"></i></button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:'stock-color',
    props:['id'],
    data(){
        return{
            colores:[],
            id_color:0,
            stock:0
        }
    },
    async mounted(){
        this.getColor()
    },
    methods:{
        getColor:function(){
            const id = this.id
            axios.get('http://127.0.0.1:8000/api/color/'+id)
                .then(res=>{
                    this.colores = res.data
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        selectColor:function($id){
            this.id_color = $id
            console.log(this.id_color);
            
        },
        postStock:function(){
            const params = {
                color_id:this.id_color,
                stock:this.stock
            }
            console.log(params);
            
            axios.post('http://127.0.0.1:8000/api/stock',params)
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
}
</script>