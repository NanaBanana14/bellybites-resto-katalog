Feature('Searching Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('search restaurant by valid keyword', async ({ I }) => {
  // Tunggu hingga elemen .restaurant-detail-name di-render
  I.waitForElement('#starterSearchButton', 10);
  I.seeElement('#starterSearchButton');
  I.click('#starterSearchButton');

  I.waitForElement('#searchElement', 10);
  I.seeElement('#searchElement');

  const validQuery = 'Cafe';

  // Mengisi input pencarian dan menekan tombol pencarian
  I.fillField('#searchElement', validQuery);
  I.click('#searchButtonElement');

  // Menunggu hasil pencarian muncul
  I.waitForElement('#search-results', 10);
  I.seeElement('#search-results', 10);

  // Memeriksa apakah hasil pencarian sesuai dengan query
  const searchResultsText = await I.grabTextFrom('#search-results');
  const searchResults = searchResultsText.split('\n');

  searchResults.forEach((result) => {
    I.see(validQuery, result);
  });
});

Scenario('search restaurant by invalid keyword', async ({ I }) => {
  I.waitForElement('#starterSearchButton', 10);
  I.seeElement('#starterSearchButton');
  I.click('#starterSearchButton');

  I.waitForElement('#searchElement', 10);
  I.seeElement('#searchElement');

  const invalidQuery = 'wrong';

  I.fillField('#searchElement', invalidQuery);
  I.click('#searchButtonElement');

  I.waitForElement('.pesan', 10);

  I.see('No restaurants found for the given query');
});
