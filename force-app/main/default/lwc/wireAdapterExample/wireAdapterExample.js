import { LightningElement, wire, api } from 'lwc';
import getAllCases from '@salesforce/apex/LWC_TrainingController.getAllCases';

export default class WireAdapterExample extends LightningElement {

    @api records;
    @api errors;

    // Decorating a property with Wire Decorator
    @wire(getAllCases) cases;

    // Decorating a function with Wire Decorator
    // Which will return error and Data which we can use to render different components
    @wire(getAllCases)
        promiseCases({data,error}){
            if(data){
                this.records = data;
                this.errors = undefined;
            }
            if(error){
                this.records = undefined;
                this.errors = error;
            }
        }

}