import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
  <article tabindex="0" class="resto-item">
    <a href="/#/detail/${restaurant.id}" class="restaurant-card">
      <img class="restaurant-image lazyload" src="${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" alt="Gambar ${restaurant.name}" tabindex="0" />
      <div class="restaurant-info">
        <p tabindex="0" class="restaurant-city" alt="kota restoran">${
          restaurant.city
        }<span class="resto-item-rating" aria-label="rating resto ${
          restaurant.rating
        }">&star; ${restaurant.rating}</span>
        </p>
        <p tabindex="0" class="restaurant-title" alt="nama restoran">${
          restaurant.name
        }</p>
        <p class="restaurant-description" alt="deskripsi restoran">${
          restaurant.description
        }</p>
      </div>
    </a>
  </article>
`

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail">
    <h2>${restaurant.name}</h2>
    <div class="img-container">
      <img class="resto-item_image-container lazyload" src="${
        CONFIG.BASE_IMAGE_URL + restaurant.pictureId
      }" alt="Gambar ${restaurant.name}" tabindex="0"/>
    </div>
    <div class="container-info">
      <!-- ... -->
    </div>

    <h2 tabindex="0" id="resto-detail-form-review-title"><span>List Menu</span></h2>
    <div class="restaurant-detail__menu-list">
      <!-- ... -->
    </div>

    <h2 tabindex="0" id="resto-detail-form-review-title"><span>Reviews</span></h2>
    <div class="detail-review">
      <!-- ... -->
    </div>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurants" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike this restaurants" id="unlikeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate
}
