import { LightningElement } from 'lwc';

export default class BubbledComposedEventChildTwo extends LightningElement {
    handleGenerate1(){
        this.dispatchEvent(new CustomEvent('bubbleevent',
            {
                bubbles:true,
                composed:true,
                detail:{
                    message:'SHIKHAR',
                    something:'Gupta'
                }
            }
        ));
    }
    handleGenerate2(){
        this.dispatchEvent(new CustomEvent('bubbleevent',
            {
                detail:{
                    message:'SHIKHAR',
                    something:'Gupta'
                }
            }
        ));
    }
    handleGenerate3(){
        this.dispatchEvent(new CustomEvent('bubbleevent',
            {
                bubbles:true,
                composed:false,
                detail:{
                    message:'SHIKHAR',
                    something:'Gupta'
                }
            }
        ));
    }
}