import RestaurantSource from '../../data/restourantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div id="loading-indicator" class="loading-indicator">
        <p class="loading">Loading...</p>
      </div>
      <div class="list-restoran" id="restaurant-list">
        <!-- List of restaurants will be displayed here -->
      </div>
    `;
  },

  async afterRender() {
    const restaurantListContainer = document.querySelector('#restaurant-list');
    const loadingIndicator = document.getElementById('loading-indicator');

    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }

    try {
      const restaurants = await RestaurantSource.listRestaurants();

      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }

      if (restaurants.length === 0) {
        restaurantListContainer.innerHTML = '<p>No restaurants found.</p>';
      } else {
        restaurantListContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
          const restaurantItem = createRestaurantItemTemplate(restaurant);
          restaurantListContainer.innerHTML += restaurantItem;
        });
      }
    } catch (error) {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
      restaurantListContainer.innerHTML = '<p class="message">Error fetching restaurant list.</p>';
    }
  },
};

export default RestaurantList;
