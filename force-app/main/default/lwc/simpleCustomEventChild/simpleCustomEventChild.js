import { LightningElement, api } from 'lwc';

export default class SimpleCustomEventChild extends LightningElement {

    
    handleGenerateEvent(){
        const simpleEvent = new CustomEvent('sampleevent',
        {
           detail: 'SHIKHAR'
        });
        this.dispatchEvent(simpleEvent);
    }
}