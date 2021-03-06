import { LitElement, html, css, customElement, property } from 'lit-element';
import "@elements/core/titles/variants/underlined-title";

@customElement('image-meta-page')
export class _ extends LitElement {
  static get styles() {
    return [css`
    .main-wrapper{
        padding:40px;
    }
    .wrapper{
        display:flex;
       padding-top:40px;
       border-bottom: solid 1px #e5e7ef;
     
    }

    ::slotted([slot=left]){
      padding-right: 64px;
      border-right:solid 1px #e5e7ef;
      height: 700px;
      
    }
    ::slotted([slot=middle]){
        padding-left:40px;
        margin-right:24px;
    }
    ::slotted([slot=right]){
      width:100%;
  }

  ::slotted([slot=button]){
    padding-top: 24px;
    display:flex;
    justify-content: flex-end;
}
   
    `];
  }

  render() {

    const STR_LABEL ="Label Images"

    return html`
    <div class="main-wrapper">
    <underlined-title slot="title" title=${STR_LABEL}></underlined-title>
        <div class="wrapper">
            <slot name="left"></slot>
            <slot name="middle"></slot>
            <slot name="right"></slot>

        </div>
        <slot name="button"></slot>
    </div>  
  `;
  }
}