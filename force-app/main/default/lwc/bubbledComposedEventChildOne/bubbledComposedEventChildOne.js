import { LightningElement } from 'lwc';

export default class BubbledComposedEventChildOne extends LightningElement {

    handleEvent(event){
        alert('CHILD ONE:- ' + event.detail.message + event.detail.something);
    }
}