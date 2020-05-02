import { LightningElement } from 'lwc';

export default class PopupExample extends LightningElement {
    
    content = 'The modal content';
    header = 'The modal header';

    handleHeaderChange(event) {
        this.header = event.target.value;
    }

    handleContentChange(event) {
        this.content = event.target.value;
    }

    handleShowModal() {
        const modal = this.template.querySelector('c-popup-modal');
        modal.show();
    }

    handleCancelModal() {
        const modal = this.template.querySelector('c-popup-modal');
        modal.hide();
    }

    handleCloseModal() {
        const modal = this.template.querySelector('c-popup-modal');
        modal.hide();
    }
}