<template>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="table-responsive">
            <loader class="col-12" v-show="load" />
            <table class="table table-striped table-md" v-show="menus.length > 0">
                <thead>
                    <tr>
                        <th>Color de fondo</th>
                        <th>Color de letra</th>
                        <th>Logo</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <elementos-tabla-menu v-for="menu in menus" :key="menu.id" :elemento="menu" />
                </tbody>
            </table>
            <div class="d-flex justify-content-center" v-if="menus.length == 0 && !load">
                <h5 class="text-center">No se encontraron cambios...</h5>
            </div>
        </div>
    </div>
</template>
<script>
import { async } from 'q'
export default {
    name:'tabla-menu',
    data(){
        return{
            menus:[],
            load:true
        }
    },
    mounted() {
        axios.get('/api/menu')
            .then(response =>{
                this.menus = response.data
                this.load= !this.load
                
            })
            .catch(err =>{
                console.log(err)
            })
    },
    computed: {
    },
}
</script>