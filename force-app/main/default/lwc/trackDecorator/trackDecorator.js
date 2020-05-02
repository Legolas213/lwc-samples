import { LightningElement, track, api } from 'lwc';

export default class TrackDecorator extends LightningElement {

    @track message = 'Reactive Propeprty'
    @api message1 = 'API Reactive Property';

    handleChange(event){
        //this.message = event.target.value;
    }

    handleChange1(event){
        //this.message1 = event.target.value;
    }
}