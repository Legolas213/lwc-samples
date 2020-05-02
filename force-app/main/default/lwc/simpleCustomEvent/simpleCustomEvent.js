import { LightningElement } from 'lwc';

export default class SimpleCustomEvent extends LightningElement {

    handleEvent(event){
        //console.log(event.eventData);
        console.log(event.detail);
        //alert('Event Generated.',event.eventData);
    }
}