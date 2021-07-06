<template>
  <div class="#" v-show="show">
    <input type="text" placeholder="category"  v-model="category"/>
    <input placeholder="date" type="date" v-model="date"/>
    <input placeholder="value" type="number" v-model="value"/>
    <button @click="addCosts">ADD</button>
  </div>
</template>

<script>
export default {
    name: 'PayDisplay',
    props:['show'],
    data(){
        return{
            category:'',
            date:'',
            value:'',
      }
    },
    computed: {
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
            const data={
                category:this.category,
                value:this.value,
                date:this.date||this.getCurrentDate,
            }
            this.$emit('addNewItem',data)
        }

    }
}
</script>
<style>

</style>
