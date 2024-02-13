import { createRouter } from '../core/heropy.js';
import Home from './Home.js';
import About from './about.js';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
]);
