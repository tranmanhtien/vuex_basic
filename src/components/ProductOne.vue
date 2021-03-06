<template>
    <div class="products-list-one">
        <h2>Product-list-one</h2>
        <ul v-for="(product,index) in saleProducts" v-bind:key="index">
            <li>
                <span class="name">Name : {{ product.name }}</span>
                <span class="price">Price : {{ product.price }} vnd</span>               
            </li>
        </ul>
        <button type="button" @click="reducePrice(4)">Sale</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
       ...mapGetters([
           'saleProducts'
       ])
    },
    methods : {
        // reducePrice: function(amount) {
        //     //sẽ không thể xem lại lịch sử khi click
        //     // this.$store.state.products.forEach(product => {
        //     //     product.price -= 1;
        //     // });
        //     this.$store.dispatch('reducePrice',amount)
        // }
        // để tránh lỗi k hiểu ... chúng ta cài npm install babel-preset-stage-e --save-dev và thêm stage-2 vào file babelrc
        ...mapActions([
            'reducePrice'
        ])
    }

}
</script>

<style>
.products-list-one{
    background-color: lightblue;
    margin-bottom: 20px;
}
.name{
    color: red;
    font-size: 20px;
}
.price{
    color: black;
    font-size: 20px;
}
</style>