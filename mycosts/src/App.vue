<template>
  <div id="app">
  <ul>
    <li><a href="#" @click="goToPage('food200','food',200)">food</a></li>
    <li><a href="#" @click="goToPage('transport50','transport',50)">Transport</a></li>
    <li><a href="#" @click="goToPage('entertainment2000','entertainment',2000)">entertainment</a></li>
  </ul>
  <div>
    <router-view/>
  </div>
  
    <button id="btn" @click="show=!show">add new cost</button>
    <pagination :paylist="getCLT" />
    <PayDisplay  :show="show"/>
    <Addlist :paylist="getCLT" />
    
    
  </div>
</template>

<script>
import Addlist from './components/Addlist.vue'
import PayDisplay from './components/PayDisplay.vue'
import pagination from './components/pagination.vue'
// import entertainment2000 from './pages/entertainment2000.vue'
// import food200 from './pages/food200.vue'
// import transport50 from './pages/transport50.vue'

import { mapMutations,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Addlist,
    PayDisplay,
    pagination,
    // entertainment2000,
    // food200,
    // transport50
  },
  data(){
    return{
      show:true,
    }
  },
  methods:{
    ...mapActions({
      fetchListData:'fetchData'
    }),
    ...mapMutations([
      'setCostsList'
    ]),
     goToPage(page,category,value){
        this.$router.push({
          name: page,
          params: {
            id:{
              category:category,
              value:value,
            },

          }
        })
      },
    // fetchData(){
    //   return[
    //     {
    //       date: '20.07.2020',
    //       category: 'Food',
    //       value: 169,
    //     },
    //     {
    //       date: '28.03.2020',
    //       category: 'Sport',
    //       value: 12,
    //     },
    //     {
    //       date: '16.09.2020',
    //       category: 'TV',
    //       value: 300,
    //     }
    //   ]
     //},
    // addNewItem(data){
    //   this.costsList=[...this.costsList,data]
    // }
  },
  computed: {
    getCLT () {
      return this.$store.getters.getCostsList
    },
    getPar () {
      return this.$store.getters.getParam
    },


  },
  created(){
    this.fetchListData()
  }
}
</script>

<style>
#btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-bottom: 60px;
}
</style>