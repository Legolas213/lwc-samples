import { LightningElement, api } from 'lwc';

export default class LDSViewRecord extends LightningElement {

    @api recordId;
    @api objectApiName;

}