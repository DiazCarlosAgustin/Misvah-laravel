
module.exports = {
    data() {
        return {
            carrito: []
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/carrito')
            .then(res =>{
                this.carrito = res.data
            })
            .catch(err =>{
                console.log(err);
            })
    },
    methods: {
      addItemCart($id){
          
          axios.get('http://127.0.0.1:8000/api/carrito/'+$id)
                .then(res => {
                    console.log(res.data);
                    this.carrito = res.data
                })
                .catch(err => {
                    console.log(err);
                })
      },
      deleteItemCart : function($i){
          cart.splice($i,1)
      }
    },
    computed: {
        itemCart: function(){
            return this.carrito
        }
    },
}