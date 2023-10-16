import RestaurantSource from '../../data/restourantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Search = {
  async render() {
    return `
      <div class="content-search">
        <div class="content_search_header">
          <div class="search-header-container">
              <h2 class="content__heading">Search Results</h2>
              <button class="back-button" id="back-button">Kembali</button>
          </div>
          <div class="input-group">
              <input type="text" id="searchElement" class="form-control" placeholder="Search for restaurants" tabindex="0">
              <button class="button-click" type="button" id="searchButtonElement">Search</button>
          </div>
        </div>
        <div id="search-results" class="list-restoran">
          <div id="loading-indicator" class="loading-indicator" style="display: block;">
            <p class="message">Hasil Pencarian akan muncul disini</p>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const searchResultsContainer = document.getElementById('search-results');
    const loadingIndicator = document.getElementById('loading-indicator');
    const searchButtonElement = document.getElementById('searchButtonElement');
    const searchInputElement = document.getElementById('searchElement');

    if (searchButtonElement) {
      searchButtonElement.addEventListener('click', async () => {
        const query = searchInputElement.value;
        searchResultsContainer.innerHTML = '';
        loadingIndicator.style.display = 'block';

        setTimeout(async () => {
          try {
            const results = await RestaurantSource.searchRestaurants(query);
            this.showSearchResults(searchResultsContainer, results);
          } catch (error) {
            searchResultsContainer.innerHTML = 'An error occurred while fetching search results.';
          } finally {
            loadingIndicator.style.display = 'none';
          }
        }, 1000);
      });
    }

    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  },

  showSearchResults(container, results) {
    const containerCopy = container;
    if (results.length === 0) {
      containerCopy.innerHTML = '<p class="pesan">No restaurants found for the given query.</p>';
    } else {
      const searchResultsHTML = results.map((restaurant) => createRestaurantItemTemplate(restaurant)).join('');
      containerCopy.innerHTML = searchResultsHTML;
    }
  },
};

export default Search;
