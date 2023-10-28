import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('quote-component')
export class QuoteComponent extends LitElement {

    @property()
    title = 'A wonderful serenity has taken possession'

    @property()
    subTitle = 'A wonderful serenity has taken possession of my entire soul, like these sweet mo'

    @property()
    buttonText = 'Link button'

    @property()
    image = 'https://images.alphacoders.com/104/1049857.jpg'

    render() {
        return html`
      <div class="container">
          <div class="grey-container">
              <div class="title">${this.title}</div>
              <div class="subTitle">${this.subTitle}</div>
              <button  @click=${this._onClick}  class="link-button">${this.buttonText}</button>
          </div>
          <a class="img-container">
              <img src=${this.image} alt="Mountain image" />
          </a>
      </div>
    `
    }

    private _onClick() {
        this.dispatchEvent(new CustomEvent('linkButtonClick'));
    }


    static styles = css`
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 500px;
        font-family: 'Playfair Display', serif;
      }

      .grey-container {
        width: 40%;
        background: #ecede9;
        align-items: flex-start;
        display: flex;
        align-content: center;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;
      }

      .img-container {
        width: 50%;
        overflow: hidden;
      }
      
      .img-container img {
        min-width:100%;
        max-height: 100%;
        display: block;
      }
      
      .title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 15px;
      }
      
      .subTitle{
        margin-bottom: 35px;
        font-size: 16px;
      }
      
      .link-button{
        background: black;
        color:white;
        border: none;
        padding: 7px 15px 7px 15px;
        font-family: 'Playfair Display', serif;
        cursor: pointer;
        font-size: 12px;
      }

    `
}

declare global {
    interface HTMLElementTagNameMap {
        'quote-component': QuoteComponent
    }
}
