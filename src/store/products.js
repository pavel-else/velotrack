export default {  
    state: {
        products: []
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        setProducts({commit}, products) {
            commit('setProducts', products)
        }
    },
    getters: {
        products(state) {
            return state.products
        },
    }
}

