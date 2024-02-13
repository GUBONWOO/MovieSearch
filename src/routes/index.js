import { createRouter } from '../core/heropy.js';
import Home from './Home';
import About from './about';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]);
