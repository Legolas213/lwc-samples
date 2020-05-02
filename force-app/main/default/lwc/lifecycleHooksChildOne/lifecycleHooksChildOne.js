import { LightningElement, api } from 'lwc';

export default class LifecycleHooksChildOne extends LightningElement {

    @api childOneName = '';
    constructor(){
        super();
        console.log('Constructor Called on Child One');
    }

    connectedCallback(){
        console.log('Connected Callback Called on Child One');
    }

    disconnectedCallback(){
        console.log('Disconnected Callback Called on Child One');
    }

    renderedCallback(){
        console.log('Rendered Callback Called on Child One');
    }
}