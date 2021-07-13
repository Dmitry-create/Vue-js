<template>
  <div class="#">
    /add/payment/Entertainment?value=2000'
  </div>
</template>

<script>
export default {
  name: 'entertainment2000',
  data(){
      return{
        par:this.$route.params.id
      }
  },
  created(){

      this.$store.commit('setParam',this.par);
  }

}
</script>
<style>

</style>
