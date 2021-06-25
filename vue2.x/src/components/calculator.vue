<template>
    <div class="dis">
        <input type=number v-model.number="operand1"/>
        <input type=number v-model.number="operand2"/>=
        {{sum}}
        <div>
            <button @click="sum=operand1+operand2">+</button>
            <button @click="sum=operand1*operand2">*</button>
            <button @click="sum=operand1-operand2">-</button>
            <button @click="share(operand1,operand2)">/</button>
            <button @click="shareHalf(operand1,operand2)">/.00</button>
            <button @click="sum=Math.pow(operand1,operand2)">^n</button>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'calculator',
        data(){
            return{
                operand1: 0,
                operand2: 0,
                sum:0
            }
        },
        methods:{
            share(oper1,oper2){
                //а можно узнать почему так не работает?

                // if (oper2 = 0){
                //    this.sum = "На ноль делить нельзя";
                // }else{
                //    this.sum = oper1/oper2;
                // }
                if (oper2 != 0){
                   this.sum = oper1/oper2;
                }else{
                   this.sum = "На ноль делить нельзя";
                }
            },
            shareHalf(oper1,oper2){
                if (oper2 != 0){
                   this.sum = parseInt(oper1/oper2);
                }else{
                   this.sum = "На ноль делить нельзя";
                }
            }
        }
    }
</script>


<style>

</style>
