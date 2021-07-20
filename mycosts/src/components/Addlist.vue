<template>
  <div class="#">
    <table class="#">
      <tr>
        <td class="td">#</td>
        <td class="td">date</td>
        <td class="td">cost</td>
        <td class="td">category</td>
      </tr>
    </table>
    <table class="table" 
    v-for="(item,idx) in getCLT"
    v-bind:key="idx"
    v-bind:data="idx">
      <tr >
        <td class="td">{{idx+1}}</td>
        <td class="td">{{item.date}}</td>
        <td class="td">{{item.value}}</td>
        <td class="td">{{item.category}}</td>
        <td class="td"><img src="../assets/Tilda.svg" height=15px @click="getModulWindow(idx),result=!result"></td>
        
        <transition name="animation"><ModalWindow v-show="result" :idx="idx"/></transition>
      </tr> 
    </table>
  </div>
</template>

<script>
//import ModalWindow from './ModalWindow.vue'

export default {
  
  name: 'Addlist',
  components:{
    ModalWindow:()=>import('./ModalWindow.vue')
    
  },
  data(){
    return{
      data:'',
      result:false
    }
  },
  props:['paylist'],
   methods:{
     getModulWindow(idx){
       this.$modal.show(idx)
      
      }
    },
  computed: {
    getCLT () {
      return this.$store.getters.getCostsList
    },
    
  },

}
</script>
<style>
 .td{
   width:100px;
 }
  .animation-enter-active, .animation-leave-active {
  transition: opacity .100s;
}
 
.animation-enter, .fade-leave-to {
  opacity: 0;
}

</style>
