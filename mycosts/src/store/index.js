import Vue from 'vue'
import Vuex from 'vuex'


 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        costsList:[]
    },
    mutations: {
        setCostsList(state,payload){
            state.costsList=payload
        },
        addNewItems(state, payload) {
            state.costsList.push(payload)
        }
        
    },
    getters: {
        getCostsList:state=>state.costsList
    },
    
    action: {
        fetchData ({commit}) {
            return new Promise((resolve) => {
               setTimeout(() => {
                 resolve([
                   {
                     date: '28.03.2020',
                     category: 'Food',
                     value: 169,
                   },
                   {
                     date: '24.03.2020',
                     category: 'Transport',
                     value: 360,
                   },
                   {
                     date: '24.03.2020',
                     category: 'Food',
                     value: 532,
                   }
                 ])
               }, 1000)
             })
            .then(res => {
                commit('setCostsList', res)
            })
        }
    }    
})
        
    

