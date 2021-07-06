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
    v-for="(item,idx) in paylist"
    v-bind:key="idx">
      <tr>
        <td class="td">{{idx+1}}</td>
        <td class="td">{{item.date}}</td>
        <td class="td">{{item.value}}</td>
        <td class="td">{{item.category}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Addlist',
  props:['paylist'],
}
</script>
<style>
 .td{
   width:100px;
 }

</style>
