Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add a review to a restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-detail-name', 10);
  I.seeElement('.restaurant-detail-name');
  I.click('.restaurant-detail-name');

  I.waitForElement('#add-review-button');
  I.seeElement('#add-review-button');
  I.click('#add-review-button');

  // Menunggu hingga elemen form review di-render
  I.waitForElement('#review-form', 10);
  I.seeElement('#review-form');

  // Pastikan elemen select tersedia
  I.waitForElement('#restaurant-id', 10);
  I.seeElement('#restaurant-id');

  // Misalnya memilih restaurant kafein yang memiliki ID uewq1zg2zlskfw1e867
  I.selectOption('Pilih Restoran:', 'uewq1zg2zlskfw1e867');

  I.fillField('Nama:', 'Nana e2e test');
  I.fillField('Review:', 'Makanannya enak banget!');
  I.click('#submit-review');

  // Menunggu pesan sukses ditampilkan
  I.waitForElement('#success-message', 10);
  I.see('Review berhasil ditambahkan!');
});

Scenario('add a review with missing information', async ({ I }) => {
  I.waitForElement('.restaurant-detail-name', 10);
  I.seeElement('.restaurant-detail-name');
  I.click('.restaurant-detail-name');

  I.waitForElement('#add-review-button');
  I.seeElement('#add-review-button');
  I.click('#add-review-button');

  I.waitForElement('#review-form', 10);
  I.seeElement('#review-form');

  // Mengosongkan form review
  I.click('#submit-review');

  // Menunggu pesan kesalahan ditampilkan
  I.waitForElement('#error-message', 10);
  I.see('Gagal menambahkan review. Silakan coba lagi.');
});
