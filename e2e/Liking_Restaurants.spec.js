const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', async ({ I }) => {
  I.waitForElement('#query');
  I.seeElement('#query');
  I.see('Anda belum memiliki restaurant favorit. Klik button like pada detail restoran untuk menambahkan');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Anda belum memiliki restaurant favorit. Klik button like pada detail restoran untuk menambahkan');

  I.amOnPage('/');

  // Tunggu hingga elemen .restaurant-detail-name di-render
  I.waitForElement('.restaurant-detail-name', 10);
  I.seeElement('.restaurant-detail-name');

  const firstRestaurant = locate('.restaurant-detail-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.click(locate('.restaurant-detail-name').first());

  // Tunggu hingga elemen #likeButton di-render
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // Tunggu hingga elemen .list-restoran di-render
  I.waitForElement('.list-restoran', 10);
  I.seeElement('.list-restoran');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-detail-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // menyukai salah satu restoran terlebih dahulu
  I.see('Anda belum memiliki restaurant favorit. Klik button like pada detail restoran untuk menambahkan');

  I.amOnPage('/');

  // Tunggu hingga elemen .restaurant-detail-name di-render
  I.waitForElement('.restaurant-detail-name', 10);
  I.seeElement('.restaurant-detail-name');

  const firstRestaurant = locate('.restaurant-detail-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // Tunggu hingga elemen #likeButton di-render
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // Tunggu hingga elemen .list-restoran di-render
  I.waitForElement('.list-restoran', 10);
  I.seeElement('.list-restoran');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-detail-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  // unliking restaurant
  I.click(likedRestaurantName);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Anda belum memiliki restaurant favorit. Klik button like pada detail restoran untuk menambahkan');
});
