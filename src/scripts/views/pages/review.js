import RestaurantSource from '../../data/restourantdb-source';

const Review = {
  async render() {
    try {
      const restaurants = await RestaurantSource.listRestaurants();

      const restaurantOptions = restaurants
        .map((restaurant) => `<option value="${restaurant.id}">${restaurant.name}</option>`)
        .join('');

      return `
      <review-header-custom> </review-header-custom>
        <div class="review-form">
          <form id="review-form" class="form-container">
            <div class="review-form-item">
              <label for="restaurant-id" class="label-form">Pilih Restoran:</label>
              <select id="restaurant-id" name="restaurant-id" class="form-control" required>
                ${restaurantOptions}
              </select>
            </div>
            <div class="review-form-item">
              <label for="name" class="label-form">Nama:</label>
              <input type="text" id="name" name="name" class="form-control">
            </div>
            <div class="review-form-item">
              <label for="review" class="label-form">Review:</label>
              <textarea id="review" name="review" class="form-control">
              </textarea>
            </div>
            <div class="review-form-item">
              <button type="submit" id="submit-review" class="form-submit">Kirim Review</button>
            </div>
          </form>
          <div id="error-message" class="pesan" style="display: none; color: green;"></div>
          <div id="success-message" class="pesan" style="display: none; color: green;"></div>
        </div>
      `;
    } catch (error) {
      const errorMessage = 'Terjadi kesalahan dalam mengambil data restoran. Silakan coba lagi nanti.';
      return `
        <div class="error-message pesan">
          ${errorMessage}
        </div>
      `;
    }
  },

  async afterRender() {
    const reviewForm = document.getElementById('review-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      errorMessage.style.display = 'none';
      successMessage.style.display = 'none';

      const restaurantIdInput = document.getElementById('restaurant-id');
      const nameInput = document.getElementById('name');
      const reviewInput = document.getElementById('review');

      const restaurantId = restaurantIdInput.value;

      const reviewData = {
        id: restaurantId,
        name: nameInput.value,
        review: reviewInput.value,
      };

      try {
        const response = await RestaurantSource.addReview(reviewData);

        if (!response.error) {
          const successMsg = 'Review berhasil ditambahkan!';
          successMessage.textContent = successMsg;
          successMessage.style.display = 'block';
        } else {
          const errorMsg = 'Gagal menambahkan review. Silakan coba lagi.';
          errorMessage.textContent = errorMsg;
          errorMessage.style.display = 'block';
        }
      } catch (error) {
        const errorMsg = 'Terjadi kesalahan dalam mengirim review. Silakan coba lagi nanti.';
        errorMessage.textContent = errorMsg;
        errorMessage.style.display = 'block';
      }
    });
  },
};

export default Review;
