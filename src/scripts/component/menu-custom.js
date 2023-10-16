import { LitElement, html, css } from 'lit-element';

class MenuCustom extends LitElement {
  static styles = css`
    .section-title {
      margin: 20px;
      text-align: center;
      color: #C63D2F;
    }
    .list-menu {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      align-items: center;
      justify-items: center;
      margin-top: 20px;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
    }
    .card-menu {
      position: relative;
      width: 200px;
      display: grid;
      grid-template-rows: 1fr auto auto auto;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
    .menu-img {
      width: 100%;
      height: auto;
      display: block;
      overflow: hidden;
      border-radius: 50%;
      position: relative;
    }
    .menu-title {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #FF9B50;
      padding: 5px;
      border-radius: 5px;
      z-index: 1;
    }
    .card-menu p {
      text-align: center;
      font-size: 14px;
      color: #333;
      margin-top: 10px;
    }
    .menu-button {
      background-color: #C63D2F;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
      margin-top: 10px;
      min-width: 44px;
      min-height: 45px;
    }
    .menu-button:hover {
      background-color: #FF9B50;
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <section class="content-menu">
        <div class="section-title">
          <h2>Tipe Makanan Apa Yang Kamu inginkan ?</h2>
          <p>Disini ada banyak loh, Ayok Jelajahi menu bersama !</p>
        </div>
        <article class="list-menu">
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/f7/a4/93/f7a493c4bafc3a94fc1360142c31479b.jpg" alt="Menu Vegetarian"
              class="menu-img">
            <h3 class="menu-title">Vegetarian</h3>
            <p>Menu tanpa daging atau produk nabati</p>
            <button class="menu-button">Read More</button>
          </div>
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/c3/2d/c8/c32dc887f28784f3e496c37d4f27c8c6.jpg" alt="Indonesian Food"
              class="menu-img">
            <h3 class="menu-title">Indonesian Food</h3>
            <p>Makanan khas dari berbagai daerah di Indonesia</p>
            <button class="menu-button">Read More</button>
          </div>
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/11/22/59/112259057b3f915446bf9e8402619371.jpg" alt="Menu non Vegetarian"
              class="menu-img">
            <h3 class="menu-title">Non-Vegetarian</h3>
            <p>Menu dengan daging atau produk hewani</p>
            <button class="menu-button">Read More</button>
          </div>
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/8c/97/76/8c9776e91d67c77925d43288714a257b.jpg" alt="Korean Food"
              class="menu-img">
            <h3 class="menu-title">Korean Food</h3>
            <p>Menu populer yang berasal dari Korea</p>
            <button class="menu-button">Read More</button>
          </div>
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/52/0a/8e/520a8ece7fd6e0720f67ba333ec413c7.jpg" alt="Japanese Food"
              class="menu-img">
            <h3 class="menu-title">Japanese Food</h3>
            <p>Menu populer yang berasal dari Jepang</p>
            <button class="menu-button">Read More</button>
          </div>
          <div class="card-menu">
            <img loading="lazy" src="https://i.pinimg.com/564x/27/f9/bb/27f9bb5e887035585fed629a7b8fd2f2.jpg" alt="Fast Food"
              class="menu-img">
            <h3 class="menu-title">Fast Food</h3>
            <p>Menu cepat saji dengan rasa yang pas di lidah</p>
            <button class="menu-button">Read More</button>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define('menu-custom', MenuCustom);
