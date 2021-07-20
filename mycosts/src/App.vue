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
    <pagination :paylist="getCLT" />  
    <Addlist :paylist="getCLT" /> 
  </div>
</template>

<script>
//import Addlist from './components/Addlist.vue'
//import PayDisplay from './components/PayDisplay.vue'
//import pagination from './components/pagination.vue'
import { mapMutations,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    Addlist:()=>import('./components/Addlist.vue'),
    pagination:()=>import('./components/pagination.vue')
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