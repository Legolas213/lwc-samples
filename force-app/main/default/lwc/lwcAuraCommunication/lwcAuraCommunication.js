import { LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {

    handleGenerate(){
        this.dispatchEvent(new CustomEvent('lwcevent',{
            detail: {
                message:'SHIKHAR',
                something:' GUPTA'
            }
        }));
    }
}