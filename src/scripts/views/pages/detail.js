import RestaurantSource from '../../data/katalogRestoDb-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb'
import { createRestaurantDetailTemplate } from '../template/template-creator'
import PostReview from '../../utils/post-review'

const Detail = {
  async render() {
    return `
    <div tabindex="0" class="main">
    <section id="detail-rest"></section>
    <div class="like" id="likeButtonContainer"></div>
  </div>
  
  <div class="form-review">
  <h1>Tambahkan Review Anda</h1>
    <form class="review-form">
      <div class="mb-3">
        <label for="inputName" class="form-label">Name</label>
        <input name="inputName" type="text" class="form-control" id="inputName">
      </div>
      <div class="mb-3">
        <label for="inputReview" class="form-label">Review</label>
        <textarea name="inputReview" class="form-control" id="inputReview" rows="4"></textarea>
      </div>
      <button id="submit-review" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  
      `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.restoDetail(url.id)
    const restaurantContainer = document.querySelector('#detail-rest')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(
      restaurant.restaurant
    )

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        pictureId: restaurant.restaurant.pictureId,
        description: restaurant.restaurant.description,
        rating: restaurant.restaurant.rating
      }
    })

    const submitReview = document.getElementById('submit-review')
    submitReview.addEventListener('click', (event) => {
      event.preventDefault()
      PostReview()
    })
  }
}

export default Detail
