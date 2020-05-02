import { LightningElement, api } from 'lwc';

export default class LifecycleHooksChildTwo extends LightningElement {

    @api childTwoName = '';
    constructor(){
        super();
        console.log('Constructor Called on Child Two');
    }

    connectedCallback(){
        console.log('Connected Callback Called on Child Two');
    }

    disconnectedCallback(){
        console.log('Disconnected Callback Called on Child Two');
    }

    renderedCallback(){
        console.log('Rendered Callback Called on Child Two');
    }
}