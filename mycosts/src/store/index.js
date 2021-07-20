import Vue from 'vue'
import Vuex from 'vuex'


 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        costsList:[],
        param:{
          category:'',
          value:'',
        }
    },
    mutations: {
        setCostsList(state,payload){
            state.costsList=payload
        },
        setParam(state,payload){
            state.param=payload
        },
        addNewItems(state, payload) {
            state.costsList.push(payload)
        },

        deIitems(state, payload) {
          console.log(payload)
            state.costsList.splice(payload.idx,payload.count)
        },
        changeitems(state, payload){ 
            state.costsList.splice(payload.idx,payload.count,payload.data)
            console.log(state.costsList)
        }
        
    },
    getters: {
        getCostsList:state=>state.costsList,
        getParam:state=>state.param,
    },
    
    actions: {
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
                commit('setCostsList',res)
            })
        }
    }    
})
        
    

