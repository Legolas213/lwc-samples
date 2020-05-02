import { LightningElement, api } from 'lwc';

export default class LDSEditRecord extends LightningElement {
    @api recordId;
    @api objectApiName;
}