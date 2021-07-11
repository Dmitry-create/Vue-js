<template>
  <div class="pag">
   <button v-for="(item,idx) in paginator "
    v-bind:key="idx"
    @click="pagpayList(item)">{{item+1}}</button>
   <table class="table" 
    v-for="(item,id) in newList"
    v-bind:key="id">
      <tr>
        <td class="td">{{item.date}}</td>
        <td class="td">{{item.value}}</td>
        <td class="td">{{item.category}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: 'pagination',
    props:['paylist'],
    
    data(){
        return{
            newList:[]
        }
    },
    methods:{
        pagpayList(item){
            if(item==0){
                this.newList=this.paylist.slice(item,item+5)
            }else{
                this.newList=this.paylist.slice(item*5,item*5+5)
            }
        }
    },
    computed:{
        pagLength(){
            return this.paylist.length/5
        },
        paginator(){
          return Array.apply(null, {length: this.pagLength}).map(Number.call, Number)
           
        }
    }
    
}
</script>
<style>
.pag{
    text-align: center
};
</style>