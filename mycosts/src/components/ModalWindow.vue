
<template>
 <div class="modal" v-if="show">
 <button @click="delCostMetod">Удалить товар</button>
 <button @click="showPayDisplayMetod">Редактировать товар</button>
 <PayDisplay  v-show="showPayDisplay" :idx="idx"/>
 </div>
</template>

<script>
//import PayDisplay from './PayDisplay.vue'
export default {
    components:{
        PayDisplay:()=>import('./PayDisplay.vue')
    },
    name: 'ModalWindow',
    props:['idx','paylist'],
    data(){
        return{
            show:false,
            showPayDisplay:false
        }
        
    },
    methods:{
        onShowMethod(settings){
            if(settings==this.idx){
                this.show=true
            }else{
                this.show=false
            }
        },
        showPayDisplayMetod(){
            this.showPayDisplay=!this.showPayDisplay
        },
        delCostMetod(){
            let data={
                idx:this.idx,
                count:1
            }
            this.$store.commit('deIitems',data)
        }

    },
    
    mounted(){
        this.$modal.EventBus.$on('show', this.onShowMethod)
    }

}
</script>
<style>
    .modal {
        width:200px;
        min-height:200px;
        position:absolute;
        border: 2px solid black;
        border-radius: 10px;
        padding:10px
    }

</style>
