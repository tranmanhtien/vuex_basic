<template>
    <div class="products-list-two">
        <h2>Product-list-one</h2>
        <ul v-for="(product,index) in saleProducts" v-bind:key="index">
            <li>
                <span class="name">Name : {{ product.name }}</span>
                <span class="price">Price : {{ product.price }} vnd</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        products(){
            return this.$store.state.products;
        },
        ...mapGetters([
            'saleProducts'
        ])
    }
}
</script>

<style>
.products-list-two{
    background-color: lightblue;
    margin-bottom: 20px;
}
</style>