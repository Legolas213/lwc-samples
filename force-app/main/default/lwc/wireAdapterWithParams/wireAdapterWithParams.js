import { LightningElement, wire } from 'lwc';
import getCasesByName from '@salesforce/apex/LWC_TrainingController.getCasesByName';
export default class WireAdapterWithParams extends LightningElement {

     subject;

     cases;
     errors;

     handleChange(event){
         this.subject = event.target.value;
     }

     @wire(getCasesByName,{subject:'$subject'})
        filterCases({data,error}){
            if(data){
                this.cases = data;
                this.error = undefined
            }
            if(error){
                console.log(error);
                this.cases = undefined;
                this.errors = error;
            }
        }
}