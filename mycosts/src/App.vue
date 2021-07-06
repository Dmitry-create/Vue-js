<template>
  <div id="app">
    <button id="btn" @click="show=!show">add new cost</button>
    <PayDisplay @addNewItem="addNewItem" :show="show"/>
    <Addlist :paylist="costsList" />
    <pagination :paylist="costsList" />
  </div>
</template>

<script>
import Addlist from './components/Addlist.vue'
import PayDisplay from './components/PayDisplay.vue'
import pagination from './components/pagination.vue'

export default {
  name: 'App',
  components: {
    Addlist,PayDisplay,pagination
  },
  data(){
    return{
      costsList:[],
      show:true,
    }
  },
  methods:{
    fetchData(){
      return[
        {
          date: '20.07.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '28.03.2020',
          category: 'Sport',
          value: 12,
        },
        {
          date: '16.09.2020',
          category: 'TV',
          value: 300,
        }
      ]
    },
    addNewItem(data){
      this.costsList=[...this.costsList,data]
    }
  },
  created(){
    this.costsList=this.fetchData()
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
