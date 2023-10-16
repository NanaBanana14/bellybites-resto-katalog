import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restourantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
    <div class="content-detail">
      <div class="content__header">
        <h2 class="content__heading">Restaurant Detail</h2>
        <div class="buttons-container">
          <div id="likeButtonContainer"></div>
          <button class="back-button" id="back-button">Kembali</button>
        </div>
      </div>
      <div id="loading-indicator" class="loading-indicator">
        <p class="loading">Loading...</p>
      </div>
      <div id="restaurant" class="restaurant" style="display: none;"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const loadingIndicator = document.getElementById('loading-indicator');

    loadingIndicator.style.display = 'block';

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);

      restaurantContainer.style.display = 'block';
      loadingIndicator.style.display = 'none';

      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          address: restaurant.address,
          rating: restaurant.rating,
        },
      });
    } catch (error) {
      loadingIndicator.style.display = 'none';
      restaurantContainer.innerHTML = 'An error occurred while fetching restaurant details.';
    }

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      window.history.back();
    });

    const addReviewButton = document.getElementById('add-review-button');
    addReviewButton.addEventListener('click', () => {
      window.location.hash = '/review';
    });
  },
};

export default DetailRestaurant;
