/* eslint-disable consistent-return */
import CONFIG from "../globals/config";

const { OBJECT_STORE_NAME } = CONFIG;

const FavoriteRestaurantStorage = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    const storedRestaurants = this.getAllRestaurant();
    return storedRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    const storedRestaurants = localStorage.getItem(OBJECT_STORE_NAME);
    return storedRestaurants ? JSON.parse(storedRestaurants) : [];
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty("id")) {
      return;
    }

    const storedRestaurants = this.getAllRestaurant();
    storedRestaurants.push(restaurant);

    localStorage.setItem(OBJECT_STORE_NAME, JSON.stringify(storedRestaurants));
  },

  deleteRestaurant(id) {
    let storedRestaurants = this.getAllRestaurant();
    storedRestaurants = storedRestaurants.filter(
      (restaurant) => restaurant.id !== id
    );

    localStorage.setItem(OBJECT_STORE_NAME, JSON.stringify(storedRestaurants));
  },
};

export default FavoriteRestaurantStorage;
