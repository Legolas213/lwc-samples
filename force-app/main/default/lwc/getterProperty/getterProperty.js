import { LightningElement, track } from 'lwc';

export default class GetterProperty extends LightningElement {

    @track message = 'Track Property';

    handleChange(event){
        this.message = event.target.value;
    }

    get updatedName(){
        return `${this.message} Already added`;
    }
}