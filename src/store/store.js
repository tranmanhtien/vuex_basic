import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state:{
        products : [
            {name: 'ti vi', price:3000},
            {name: 'tu lanh', price:4000},
            {name: 'may giat', price:5000},
        ] 
    },
    getters :{
        saleProducts: state =>{
            var saleProducts = state.products.map( product => {
                return {
                    name: product.name + '**',
                    price: product.price/2
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        reductPrice: (state,payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context,payload) => {
            setTimeout(function(){
                context.commit('reductPrice',payload);
            },2000)
        }
    }
})