/* eslint-disable no-console */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      console.log('API Response:', responseJson);
      return responseJson.restaurants;
    } catch (error) {
      console.error(`Error fetching restaurant data: ${error}`);
      throw error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error(`Error fetching restaurant detail: ${error}`);
      throw error;
    }
  }

  static async searchRestaurants(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      console.log('API Response:', responseJson);
      if (responseJson.error) {
        return [];
      }
      return responseJson.restaurants;
    } catch (error) {
      console.error(`Error searching for restaurants: ${error}`);
      throw error;
    }
  }

  static async addReview(reviewData) {
    try {
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(`Error adding review: ${error}`);
      throw error;
    }
  }
}

export default RestaurantSource;
