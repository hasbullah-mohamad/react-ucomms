import React, {
  Component
} from 'react';

import Hero from '../../sections/Hero';
import Chanel from './Chanel';
import Clients from './Clients';
import Contact from '../../sections/Contact';

class About extends Component {
  render() {
    return (
      <div className="site-content">
        <Hero>
          <h1 className="title title-responsive text-primary font-weight-bold text-center">About uComms</h1>
        </Hero>
        <Chanel />
        <Clients />
        <Contact />
      </div>
    );
  }
}

export default About;
