import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let searchRestaurantsSpy;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    document.body.innerHTML = `
      <div id="restaurant-search-container">
        <input id="query" type="text">
        <div class="restaurant-result-container">
          <ul class="restaurants">
          </ul>
        </div>
      </div>
    `;
  };

  const constructPresenter = () => {
    searchRestaurantsSpy = jasmine.createSpy('searchRestaurants').and.callFake((query) => {
      if (query === 'resto a') {
        return [
          { id: 111, name: 'resto abc' },
          { id: 222, name: 'ada juga resto abcde' },
          { id: 333, name: 'ini juga boleh resto a' },
        ];
      }
      return [];
    });

    favoriteRestaurants = {
      getAllRestaurants: jasmine.createSpy('getAllRestaurants').and.returnValue([]),
      searchRestaurants: searchRestaurantsSpy,
    };

    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('resto a');

      expect(searchRestaurantsSpy).toHaveBeenCalledWith('resto a');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant').length).toEqual(1);
      presenter._showFoundRestaurants([
        {
          id: 1,
          name: 'Satu',
        },
        {
          id: 2,
          name: 'Dua',
        },
      ]);
      expect(document.querySelectorAll('.restaurant').length).toEqual(2);
    });

    it('should show the name of the found restaurants', () => {
      presenter._showFoundRestaurants([
        {
          id: 1,
          name: 'Satu',
        },
      ]);
      expect(document.querySelectorAll('.restaurant__name').item(0).textContent).toEqual('Satu');

      presenter._showFoundRestaurants([
        {
          id: 1,
          name: 'Satu',
        },
        {
          id: 2,
          name: 'Dua',
        },
      ]);
      const restaurantNames = document.querySelectorAll('.restaurant__name');
      expect(restaurantNames.item(0).textContent).toEqual('Satu');
      expect(restaurantNames.item(1).textContent).toEqual('Dua');
    });

    it('should show - for found restaurant without name', () => {
      presenter._showFoundRestaurants([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant__name')
        .item(0).textContent)
        .toEqual('-');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(3);

          done();
        });

      searchRestaurants('resto a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document
        .getElementById('restaurant-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          const restaurantNames = document.querySelectorAll('.restaurant__name');

          expect(restaurantNames.item(0).textContent).toEqual('resto abc');
          expect(restaurantNames.item(1).textContent).toEqual('ada juga resto abcde');
          expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh resto a');

          done();
        });

      searchRestaurants('resto a');
    });
  });

  describe('When query is empty', () => {
    xit('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurants.and.returnValue([]);
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    xit('should show all favorite restaurants', () => {
      // favoriteRestaurants.getAllRestaurants.mockImplementation(() => []);
      searchRestaurants('    ');

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
    });
  });
});
