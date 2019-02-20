import axios from 'axios';

export default {
    state: {
        repairs: []
    },
    getters: {
        repairs(state) {
            return state.repairs;
        }
    },
    mutations: {
        GET_REPAIRS(state, repairs) {
            state.repairs = repairs;
        }
    },
    actions: {
        GET_REPAIRS({ dispatch, commit, getters }) {
            console.log('GET_REPAIRS');

            return new Promise((resolve, reject) => {
                const queue = [
                    { cmd: 'getRepairs' },
                    { cmd: 'getProducts' },
                ];
                const url = getters.url;
                const token = localStorage.getItem('user-token');

                axios({ 
                    url,
                    data: {
                        queue,
                        token
                    },
                    method: 'POST',
                })
                .then(resp => {
                    console.log(resp)
                    commit('GET_REPAIRS', resp.data.repairs);
                    commit('setProducts', resp.data.products);
                    resolve(true);                        
                }).
                catch(err => {
                    console.log(err)
                    reject(err);
                })
            });
        }
    }
}