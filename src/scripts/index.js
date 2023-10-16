/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './component/menu-custom';
import './component/review-header-custom';
import './component/explore-custom';
import main from '../public/view/main';
import App from './views/app';
import RestaurantSource from './data/restourantdb-source';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

document.addEventListener('DOMContentLoaded', main);

document.querySelectorAll('.navigasi').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetUrl = link.getAttribute('href');

    if (link.classList.contains('about-us-link')) {
      window.open(targetUrl, '_blank');
    } else {
      window.location.hash = targetUrl;
    }
  });
});

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const searchButtonElement = document.getElementById('searchButtonElement');
if (searchButtonElement) {
  searchButtonElement.addEventListener('click', async () => {
    const searchElement = document.getElementById('searchElement');
    const query = searchElement.value;

    try {
      const results = await RestaurantSource.searchRestaurants(query);
      // eslint-disable-next-line no-console
      console.log('Hasil pencarian:', results);

      window.location.hash = '/search';
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error searching for restaurants:', error);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const readMoreButton = document.getElementById('starterSearchButton');

  if (readMoreButton) {
    readMoreButton.addEventListener('click', () => {
      window.location.hash = '/search';
    });
  }
});
