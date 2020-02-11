<template>
    <tr>
        <td class="align-center align-middle text-center">
           <img :src="`../../../img/colores/${color.imagen_color}`" 
            :alt="color.descripcion" width="40"
            class="">  
        </td>
        <td class="align-center align-middle justify-content-center">
           <p class=" text-center align-middle m-0" v-if="!edit">{{color.stock_color.stock}} </p> 
           <input type="number" name="txtStock" id="txtStock" v-model="stock" v-if="edit" class="w-auto">
        </td>
        <td class="align-center align-middle text-center" v-if="!edit">
            <button type="button" class="btn btn-success py-2 px-3 text-center" @click="handdleEdit">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="btn btn-danger py-2 px-3 text-center">
                <i class="fas fa-trash"></i>
            </button>
        </td>
        <td class="align-center align-middle text-center" v-if="edit">
            <button type="button" class="btn btn-success py-2 px-3 text-center" @click="updateStock">
                <i class="fas fa-check"></i>
            </button>
            <button type="button" class="btn btn-danger py-2 px-3 text-center"  @click="handdleEdit">
                <i class="fas fa-times"></i>
            </button>
        </td>

    </tr>
</template>
<script>
export default {
    name:'ColorEditarProducto',
    props:['color'],
    data(){
        return{
            edit:false,
            stock: this.color.stock_color.stock
        }
    },
    methods:{   
        handdleEdit: function(){
            this.edit = !this.edit
        },
        updateStock: function(){
            const id = this.color.stock_color.id
            const params = {
                stock: this.stock
            }
            axios.put('http://127.0.0.1:8000/api/stock/'+ id,params)
                .then(res =>{
                    console.log(res.data);
                    this.$emit('updateStock',res.data.stock)
                    this.edit = !this.edit
                })
                .catch(err =>{
                    console.log(err)
                })
        }
    }
}
</script>