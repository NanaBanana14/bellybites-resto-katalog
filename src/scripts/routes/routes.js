import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Search from '../views/pages/search';
import Review from '../views/pages/review';

const routes = {
  '/': RestaurantList, // default page
  '/list': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/search': Search,
  '/review': Review,
};

export default routes;
