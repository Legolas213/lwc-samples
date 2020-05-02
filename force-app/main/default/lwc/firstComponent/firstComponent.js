import { LightningElement, track } from 'lwc';

export default class FirstComponent extends LightningElement {

    @track
    showMine = true;
    @track
    showHers = false;

    showMine1(){
        console.log('MINE');
        this.showMine = true;
        this.showHers = false;
    }
    showHers1(){
        console.log('HERS');
        this.showMine = false;
        this.showHers = true;
    }
}