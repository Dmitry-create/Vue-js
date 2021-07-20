<template>
  <div class="#">
    <input type="text" placeholder="category"  v-model="getPar.category"/>
    <input placeholder="date" type="date" v-model="date"/>
    <input placeholder="value" type="number" v-model="getPar.value"/>
    <button @click="addCosts">ADD</button>
    <button @click="changeCosts">CHANGE</button>
    <span v-show="message">{{'заполните все поля'}}</span>
  </div>
</template>

<script>
//import { mapMutations } from 'vuex'
export default {
    name: 'PayDisplay',
    props:['showPayDisplay','idx',],
    data(){
        return{
            //category:'',
            date:'',
            //value:'',
            message:false
      }
    },
    computed: {
    //     ...mapMutations([
    //   'setCostsList'
    // ]),
        getPar () {
            return this.$store.getters.getParam
        },
         
        getCurrentDate () {
            const today = new Date();
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods:{
        addCosts(){
            if(this.getPar.category && this.getPar.value ){
                this.message=false
            const data={
                
                category:this.getPar.category,
                value:this.getPar.value,
                date:this.date||this.getCurrentDate,
            }
            this.$store.commit('addNewItems',data);
            }else{
                this.message=true
            }
        },
        changeCosts(){
            const newdata={
                idx:this.idx,
                count:1,
                data:{
                    category:this.getPar.category,
                    value:this.getPar.value,
                    date:this.date||this.getCurrentDate,}
            }
            this.$store.commit('changeitems',newdata);
        }
    }
}
</script>
