/* eslint-disable*/
import API_ENDPOINT from '../../globals/api-endpoint';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
 <h2 class="restaurant-name">${restaurant.name}</h2>
 <div class="restaurant-detail">
    <div class="restaurant-img-desc">
      <img class="lazyload restaurant-image" data-src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}" alt="${restaurant.name}">
      <h4>Description : </h4>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant-info">
      <h3>Information</h3>
      <h4>City : ${restaurant.city}</h4>
      <h4>Address : ${restaurant.address}</h4>
      <h4>Rating : ${restaurant.rating}</h4>
      <div class="restaurant-categories">
        <h4>Categories</h4>
        <ul>
            ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="restaurant-menu">
      <h3>Menu</h3>
      <div class="restaurant-menu-container">
        <div class="restaurant-menu-foods">
            <h4>Foods</h4>
            <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="restaurant-menu-drinks">
            <h4>Drinks</h4>
            <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
        </div>
      </div>
    </div>
    <div class="restaurant-reviews">
      <div class="review-header-item">
        <h3>Customer Reviews</h3>
        <button class="add-review headline__button" id="add-review-button" data-id="${restaurant.id}">Add Review</button>
      </div>
      <ul>
        ${restaurant.customerReviews.map((review) => `
          <li>
            <h4>${review.name}</h4>
            <p>${review.review}</p>
            <p>${review.date}</p>
          </li>
        `).join('')}
      </ul>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="restaurant-card">
            <img class="lazyload resto-img" data-src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}" class="restaurant-image" alt="${restaurant.name}">
            <div class="restaurant-details">
                <p class="city-restaurant">Kota: ${restaurant.city}</p>
                <p class="rating">Rating: ${restaurant.rating}</p>
            </div>
            <div class="restaurant-info">
                <h3><a href="#/detail/${restaurant.id}" class="restaurant-detail-name">${restaurant.name}</a></h3>
                <p>${restaurant.description}</p>
            </div>
        </div>
`;

const createRestaurantFavoriteItemTemplate = (restaurant) => `
        <div class="restaurant-card">
            <img class="lazyload resto-img" data-src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}" class="restaurant-image" alt="${restaurant.name}">
            <div class="restaurant-details">
                <p class="city-restaurant">Kota: ${restaurant.city}</p>
                <p class="rating">Rating: ${restaurant.rating}</p>
            </div>
            <div class="restaurant-info">
                <h3><a href="#/detail/${restaurant.id}" class="restaurant-detail-name">${restaurant.name}</a></h3>
            </div>
        </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantFavoriteItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
