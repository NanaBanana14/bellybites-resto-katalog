import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this.content = content;
    this.exploreComponent = document.querySelector('explore-component');
    this.menuCustom = document.querySelector('menu-custom');
    this.mainContent = document.querySelector('#main-content');
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip-link');

    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      this.mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });

    this.updateMainContentIdForRoute(url);

    if (this.shouldHideExploreAndMenu(url)) {
      this.hideExploreComponent();
      this.hideMenuCustom();
    } else {
      this.showExploreComponent();
      this.showMenuCustom();
    }
  }

  // eslint-disable-next-line
  updateMainContentIdForRoute(url) {
    const contentSection = document.querySelector('.content');
    const searchSection = document.querySelector('.search-section');

    // Periksa apakah rute aktif sesuai dengan yang diinginkan
    if (url === '/detail/:id' || url === '/favorite' || url === '/search' || url === '/review') {
      contentSection.removeAttribute('id');
      contentSection.removeAttribute('tabindex');
      searchSection.setAttribute('id', 'main-content');
      searchSection.setAttribute('tabindex', '0');
    } else {
      contentSection.setAttribute('id', 'main-content');
      searchSection.removeAttribute('id');
    }
  }

  // eslint-disable-next-line
  shouldHideExploreAndMenu(url) {
    return url === '/detail/:id' || url === '/favorite' || url === '/search' || url === '/review';
  }

  hideExploreComponent() {
    this.exploreComponent.style.display = 'none';
  }

  showExploreComponent() {
    this.exploreComponent.style.display = 'block';
  }

  hideMenuCustom() {
    this.menuCustom.style.display = 'none';
  }

  showMenuCustom() {
    this.menuCustom.style.display = 'block';
  }
}

export default App;
