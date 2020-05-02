import { LightningElement } from 'lwc';

export default class BubbledComposedEventExample extends LightningElement {
    handleEvent(event){
        alert('PARENT:- ' + event.detail.message + event.detail.something);
    }
}