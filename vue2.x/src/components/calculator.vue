<template>
    <div class="dis">
        <input type=number v-model.number="operand1" 
        v-bind:disabled="check!==1">
        <input type=number v-model.number="operand2"
        v-bind:disabled="check!==2"/>=
        {{sum}}
        <div>
            <button v-for="operand in operands" 
            v-bind:key="operand"
            v-bind:disabled="operand1 === '' || operand2 === ''"
            @click="calculate(operand)">{{operand}}
            </button>
        </div>
        <div>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label>отобразить клавиатуру</label>
        </div>
        <div v-show="checked">
            <button v-for="number in numbers"
            v-bind:key="number"
            @click="create(number)">
            {{number}}
            </button>
            <button 
            @click="del()">
            del
            </button>
            
            
        </div>
        <div class="radio">
        <input name="radio" type="radio" 
        @click="checking"
        
        >
        <input name="radio" type="radio"
        @click="checking2" >
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: 'calculator',
        data(){
            return{
                operand1: '',
                operand2: '',
                sum:0,
                operands: ['+', '-', '/', '*'],
                checked:'',
                numbers:[1,2,3,4,5,6,7,8,9,0,],
                check: ''
            }
        },
        methods:{
            // share(oper1,oper2){
                

            //     if (oper2 == 0){
            //        this.sum = "На ноль делить нельзя";
            //     }else{
            //        this.sum = oper1/oper2;
            //     }
            //     // if (oper2 != 0){
            //     //    this.sum = oper1/oper2;
            //     // }else{
            //     //    this.sum = "На ноль делить нельзя";
            //     // }
            // },
            // shareHalf(oper1,oper2){
            //     if (oper2 != 0){
            //        this.sum = parseInt(oper1/oper2);
            //     }else{
            //        this.sum = "На ноль делить нельзя";
            //     }
            // }
            add () {
                this.sum = +this.operand1 +(+this.operand2)
            },
            substract () {
                this.sum = this.operand1 - this.operand2
            },
            divide () {
                if (this.operand2== 0){
                   this.sum = "На ноль делить нельзя";
                }else{
                   this.sum = this.operand1 / this.operand2
                }  
            },
            multiply () {
                this.sum = this.operand1 * this.operand2
            },
            calculate (operand = '') {
                switch (operand) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.substract()
                    break;
                case '*':
                    this.multiply()
                    break;
                case '/':
                    this.divide()
                    break;
                }
            },
            create(number){
                if(this.check==1){
                    this.operand1=this.operand1+String(number)
                    }else{
                     this.operand2=this.operand2+String(number)
                    }
                    console.log(this.check)
                
            },
            checking(){
               this.check=1
               console.log(this.operand1)
            },
            checking2(){
               this.check=2
               console.log(this.operand2)
            },
            del(){
                if(this.check==1){
                     this.operand1=this.operand1.slice(0,-1)
                    }else{
                      this.operand2=this.operand2.slice(0,-1)
                    }
                    console.log(this.check)
                
               
            }                            
        }
    }
    
</script>


<style>

</style>
