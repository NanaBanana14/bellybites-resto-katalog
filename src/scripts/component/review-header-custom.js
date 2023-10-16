class ReviewCustom extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${this.getStyle()}
      </style>
      <div class="header-review">
        <button class="back-button" id="back-button">Kembali</button>
        <div class="section-title">
          <h2>Tambahkan Review</h2>
          <p>Review yang baik adalah sebuah review yang dapat membantu restoran meningkatkan pelayanan dan kualitasnya</p>
        </div>
      </div>
    `;
    const backButton = this.shadowDOM.querySelector('#back-button');
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getStyle() {
    return `
      .header-review {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }
      
      .header-review .back-button {
        height: fit-content;
        width: 100px;
        padding: 10px;
        min-height: 48px;
        min-width: 45px;
      }

      .review-header-item {
        display: grid;
        grid-template-columns: 2fr 1fr;
        padding: 10px;
      }
      
      .section-title {
        margin: 20px;
        text-align: center;
        color: #C63D2F;
        font-size: 20px;
      }
      .back-button {
        text-transform: uppercase;
        padding: 8px 16px;
        background-color: #C63D2F;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: opacity 0.3s;
        padding: 10px;
      }
      
      .back-button:hover {
        opacity: 0.8;
      }    
      @media (max-width: 440px) {  
        .review-header-item {
          grid-template-columns: 1fr;
        }
      
        .header-review {
          flex-direction: column;
        }
      }
    `;
  }
}

customElements.define('review-header-custom', ReviewCustom);
