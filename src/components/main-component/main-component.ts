import {css, html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import "./../contact-component/contact-component.ts";
import "./../quote-component/quote-component.ts";


@customElement('main-component')
export class MainComponent extends LitElement {

    @property()
    headline = 'Cta - Main conversion'

    @property()
    quoteTitle = 'A wonderful serenity has taken possession'

    @property()
    quoteDescription = 'A wonderful serenity has taken possession of my entire soul, like these sweet mo'

    @property()
    quoteButtonText = 'Link button'

    @property()
    contactMessage = 'Contact us'

    @property()
    image = 'https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&q=80&w=1738&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    @state()
    showContact = false;

    render() {
        return html`
            <div class="headline">${this.headline}</div>
            <quote-component @linkButtonClick=${this._linkButtonListener} .title=${this.quoteTitle}
                             .subTitle=${this.quoteDescription} .buttonText=${this.quoteButtonText}
                             .image=${this.image}></quote-component>
            <contact-component .showContact=${this.showContact} .contactMessage=${this.contactMessage}
                               @closeButtonClick=${this._closeContactListener}></contact-component>
        `
    }

    private _linkButtonListener() {
        this.showContact = true;
    }

    private _closeContactListener() {
        this.showContact = false;
    }


    static styles = css`
      .headline {
        margin-left: 10%;
        margin-bottom: 30px;
        border-left: 2px solid red;
        padding-left: 10px;
        font-size: 36px;
        font-family: 'Playfair Display', serif;
        font-weight: bold;
      }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'main-component': MainComponent
    }
}
