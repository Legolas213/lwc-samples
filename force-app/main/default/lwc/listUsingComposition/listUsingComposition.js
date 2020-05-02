import { LightningElement } from 'lwc';

export default class ListUsingComposition extends LightningElement {

    contacts = [
        {
            id: 1,
            name:'Contact 1'
        },
        {
            id: 2,
            name:'Contact 2'
        },
        {
            id: 3,
            name:'Contact 3'
        },
        {
            id: 4,
            name:'Contact 4'
        }
    ]; 
}