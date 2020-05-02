import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {

    name = 'Shikhar';
    constructor(){
        super();
        this.name = this.name + ' Gupta';
        console.log('Constructor Called on Parent');
    }

    connectedCallback(){
        console.log('Connected Callback Called on Parent');
    }

    disconnectedCallback(){
        console.log('Disconnected Callback Called on Parent');
    }

    renderedCallback(){
        console.log('Rendered Callback Called on Parent');
    }

    handleChange(event){
        this.name = event.target.value;
    }

}