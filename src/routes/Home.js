import { Component } from '../core/heropy.js';
import Headline from '../components/Headline.js';
import Search from '../components/Search.js';

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    this.el.classList.add('container');
    this.el.append(headline, search);
  }
}
