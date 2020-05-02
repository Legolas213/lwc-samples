import { LightningElement } from 'lwc';
import getCasesByName from '@salesforce/apex/LWC_TrainingController.getCasesByName';

export default class ImperativeApexExample extends LightningElement {

    cases;
    errors;
    handleChange(event){
        getCasesByName({
                subject:event.target.value
            })
            .then(result => {
                console.log(result);
                this.cases = result;
            })
            .catch(errors => {
                this.errors = errors;
            });
    }
}