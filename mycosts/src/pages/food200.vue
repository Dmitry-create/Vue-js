<template>
  <div class="#">
    
    </div>
</template>

<script>
export default {
  name: 'food200',
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
