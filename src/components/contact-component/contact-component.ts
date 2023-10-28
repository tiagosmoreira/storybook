import {css, html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'


@customElement('contact-component')
export class ContactComponent extends LitElement {

    @property()
    contactMessage = 'Contact us'

    @state()
    showContact = true;

    render() {

        return this.showContact
            ? html`
                    <div class="container">
                        <div class="message-container">
                            ${this.contactMessage}
                        </div>
                        <button @click=${this._onCloseClick} class="close-button"><span
                                class="close-icon">&times;</span></button>
                    </div>
            `
            : null
    }

    private _onCloseClick() {
        this.showContact = false;
        this.dispatchEvent(new CustomEvent('closeButtonClick'));
    }


    static styles = css`
      .container {
        background: #323c53;
        height: 300px;
        position: relative;
        display: block;
        font-size: 24px;
        padding: 10px 10px 10px 10%;
        margin-top: 20px;
        color: white;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
      }

      .container:after, .container:before {
        bottom: 100%;
        left: 10%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      .container:after {
        border-color: rgba(136, 183, 213, 0);
        border-bottom-color: #323c53;
        border-width: 10px;
        margin-left: -10px;
      }

      .container:before {
        border-color: rgba(194, 225, 245, 0);
        border-bottom-color: #323c53;
        border-width: 11px;
        margin-left: -11px;
      }
      
      .message-container{
        margin-top: 20px;
        float: left;
      }

      .close-button {
        background: transparent;
        float: right;
        cursor: pointer;
      }

      .close-icon {
        color: white;
        font-size: 45px;
        line-height: 30px;
      }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'contact-component': ContactComponent
    }
}
