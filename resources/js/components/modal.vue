<template>
    <div class="modal-backdrop ">
        <div class="modal col-12 col-xs-10 col-sm-8 col-md-6 col-lg-4 ">
            <section class="modal-header">
                <slot name="head">
                    ¿Desea eliminar?
                </slot>
            </section>
            <section class="modal-body">
                <slot name="body">
                    {{mensaje}}
                </slot>
            </section>
            <footer class="modal-footer">
                <slot name="footer">
                    <button type="button" class="btn btn-danger" @click="close">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="aceptar()">Aceptar</button>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        props:['mensaje'],
        name:'modal',
        data(){
            return{
                estado:true
            }
        },
        methods:{
            aceptar:function(){
                this.$emit('event',true)
            },
            close:function(){
                this.$emit('close')
            }
        }
    }
</script>
<style lang="css" scoped>
     .modal-backdrop {
        position: fixed;
        min-height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center ;
    }

    .modal {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        position: relative !important;
        flex-direction: column;
        min-height: 250px;
        height: auto;
        max-height: 350px;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color:black;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 40px 10px;
    }
</style>