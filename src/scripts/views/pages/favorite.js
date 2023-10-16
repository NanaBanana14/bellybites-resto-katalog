import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id="query" class="content-detail">
        <div class="content__header">
          <h2 class="content__heading">Restoran Favorite</h2>
          <div class="buttons-container">
            <button class="back-button" id="back-button">Kembali</button>
          </div>
        </div>
        <div id="restaurants" class="list-restoran">
        </div>
      </div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurantsContainer) {
      restaurantsContainer.innerHTML = '';

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<p class="no-data">Anda belum memiliki restaurant favorit. Klik button like pada detail restoran untuk menambahkan</p>';
      } else {
        restaurants.forEach((restaurant) => {
          if (restaurantsContainer) {
            restaurantsContainer.innerHTML += createRestaurantFavoriteItemTemplate(restaurant);
          }
        });
      }
    }

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  },
};

export default Favorite;
