import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    
    firstNumber = 0;
    secondNumber = 0;
    
    handleChange(event){
        const label = event.target.label;
        if(label === 'Enter first number'){
            this.firstNumber = event.target.value;
        }else{
            this.secondNumber = event.target.value;
        }
        console.log(this.firstNumber);
        console.log(this.secondNumber);
    }
    handleSum(){
        const sum = parseInt(this.firstNumber) + parseInt(this.secondNumber);
        alert(sum);
    }
    handleSubtract(){
        alert(parseInt(this.firstNumber) - parseInt(this.secondNumber));
    }
}