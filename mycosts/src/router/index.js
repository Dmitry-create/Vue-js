import Vue from 'vue'
import Router from 'vue-router'

// import entertainment2000 from '../pages/entertainment2000.vue'
// import food200 from '../pages/food200.vue'
// import transport50 from '../pages/transport50.vue'

Vue.use(Router)

export default new Router({
 mode: 'history',   
 routes:[
     {
         path:'/add/payment/Entertainment?value=2000',
         name:'entertainment2000',
         component:()=>import('../pages/entertainment2000.vue')
     },
     {
         path:'/add/payment/Transport?value=50',
         name:'transport50',
         component:()=>import('../pages/food200.vue')
     },
     {
         path:'/add/payment/Food?value=200',
         name:'food200',
         component:()=>import('../pages/transport50.vue')
     },
 ]   
})