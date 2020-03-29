<template>
    <div class="col-12 col-xs-12 col-md-12 col-lg-12  border-bottom pb-4">
        <h3 class="text-center text-muted mt-2">Agregar stock a un color</h3>
        <form @submit.prevent="postStock">
            <div class="form-group">
                <label for="cbColor">Color:</label>
                <lista-color
                    v-for="(color, index) in colores"
                    :color="color"
                    :id="stocks"
                    :key="color.id"
                    @selectColor="selectColor(index, ...arguments)"
                />
            </div>
            <div class="form-group">
                <label for="txtStock">Stock:</label>
                <input
                    type="number"
                    name="txtStock"
                    id="txtStock"
                    class="form-control"
                    v-model="stock"
                    min="0"
                />
            </div>
            <div class="text-center">
                <button type="reset" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
                <button type="submit" class="btn btn-success">
                    <i class="fas fa-check"></i>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "stock-color",
    props: ["id", "colores"],
    data() {
        return {
            id_color: 0,
            i: 0,
            stock: 0,
            stocks: []
        };
    },
    methods: {
        selectColor: function($i, $id) {
            this.id_color = $id;
            this.i = $i;
        },
        postStock: function() {
            const params = {
                color_id: this.id_color,
                stock: this.stock
            };
            axios
                .post("http://127.0.0.1:8000/api/stock", params)
                .then(res => {
                    var stock = res.data
                    this.$emit("newStock", this.i, stock);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        id_stock: function() {
            const colors = this.colores;
            colors.forEach(c => {
                this.stocks.push(c.stock_color);
            });
            return this.stocks;
        }
    },
    computed: {}
};
</script>
