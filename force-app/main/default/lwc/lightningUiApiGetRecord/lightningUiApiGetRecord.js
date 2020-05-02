import { LightningElement, api, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

const FIELDS = ['Account.Name','Account.BillingCity','Account.Type'];

export default class LightningUiApiGetRecord extends LightningElement {
    @api recordId;

    recordDetails;


    // If we will user layout types with full then iot depends upon the layout types provided
    @wire(getRecord,{recordId:'$recordId',fields : FIELDS ,layoutTypes:['Full'],modes:['View','Edit','Create']})
        wiredRecord({data,error}){
            if(data){
                console.log('RECORD:_ ',data);
                this.recordDetails = data.fields;
            }
            if(error){
                console.log('ERROR:- ',error);
            }
        }

    get name(){
        return this.recordDetails.Name.value;
    }
}