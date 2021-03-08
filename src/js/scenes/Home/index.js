import React, {
  Component
} from 'react';

import Hero from './Hero';
import Platform from './Platform';
import Intelligence from './Intelligence';
import Smart from './Smart';
import Contact from '../../sections/Contact';

class Home extends Component {
  render() {
    return (
      <div className="site-content">
        <Hero />
        <Platform />
        <Intelligence />
        <Smart />
        <Contact />
      </div>
    );
  }
}

export default Home;
