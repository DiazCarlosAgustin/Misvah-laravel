
// export default {
//     data() {
//         return {
//             cart:[]
//         }
//     },
//     beforeMount() {
//         this.getCart()
        
//     },
//     methods: {
//         getCart() {
//             axios
//                 .get("http://127.0.0.1:8000/api/carrito")
//                 .then(res => {
//                     this.cart = res.data; 
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         },
//         setCarrito($carrito) {
//             this.cart = $carrito
//         },
//         deleteCarrito($i) {
//             this.cart.splice($i, 1)
//         }
//     },
//     computed: {
//         getCarrito(){
//             return this.cart
//         }
//     },
// }

