import { LitElement, html, css } from 'lit-element';

class ExploreComponent extends LitElement {
  static styles = css`
    .section-title {
      margin: 20px;
      text-align: center;
      color: #C63D2F;
      font-size: 20px;
    }
    .explore {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      align-items: flex-start;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
    }
    .headline {
      display: grid;
      grid-template-columns: 1fr;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s, background-color 0.3s, color 0.3s;
      cursor: pointer;
    }
    .headline:hover {
      transform: translateY(-10px);
      background-color: #FF9B50;
      color: white;
    }
    .headline__figure {
      width: 100%;
      position: relative;
    }
    .headline__figure img {
      width: 100%;
      height: auto;
      border-radius: 5px 5px 0 0;
    }
    .headline__figure figcaption {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      background-color: #C63D2F;
      color: white;
      font-size: 13px;
      padding: 8px 0;
    }
    .headline__content {
      padding: 20px;
    }
    .headline__title {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
    .headline__description {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }
    .headline__button {
      text-transform: uppercase;
      margin-top: 24px;
      cursor: pointer;
      padding: 20px;
      color: white;
      border: none;
      border-radius: 5px;
      background-color: #C63D2F;
      transition: opacity 0.3s;
    }
    .headline__button:hover {
      opacity: 0.8;
    }
  `;

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div class="section-title">
        <h2>Apa Yang Bisa Kamu Temukan Disini ?</h2>
      </div>
      <div class="explore">
        <article class="headline">
          <div class="headline__figure">
            <img loading="lazy" src="https://i.pinimg.com/564x/92/b3/8b/92b38be3c16a32d670294686d2407049.jpg"
              alt="food" />
            <figcaption>food</figcaption>
          </div>
          <div class="headline__content">
            <h3 class="headline__title">Berbagai Macam Menu ada disini</h3>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img loading="lazy"
              src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?size=626&ext=jpg&ga=GA1.2.402080748.1694688639&semt=sph"
              alt="Restaurant" />
            <figcaption>Restaurant</figcaption>
          </div>
          <div class "headline__content">
            <h3 class="headline__title">Mau pilih berdasarkan Restoran nya ?</h3>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img loading="lazy" src="https://i.pinimg.com/564x/5b/3c/b2/5b3cb2253b5a17c54500aab911f5168d.jpg" alt="Bahan Makanan" />
            <figcaption>Resep Makanan</figcaption>
          </div>
          <div class="headline__content">
            <h3 class="headline__title">Ingin tahu Resep dari suatu Menu ?</h3>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
        </article>

        <article class="headline">
          <div class="headline__figure">
            <img loading="lazy" src="https://i.pinimg.com/564x/76/d3/ec/76d3ecd706b739820da52010eac581f2.jpg" alt="Blog Kuliner" />
            <figcaption>Blog Kuliner</figcaption>
          </div>
          <div class="headline__content">
            <h3 class="headline__title">Update seputar kuliner ada disini</h3>
            <p class="headline__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
              facere nostrum officiis qui quidem ratione similique, soluta veniam
              voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
              distinctio ducimus expedita itaque laudantium magnam maiores.
            </p>
            <button class="headline__button">Read More</button>
          </div>
      </article>
    </div>
    `;
  }
}

customElements.define('explore-component', ExploreComponent);
