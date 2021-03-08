import React, {
  Component
} from 'react';

import Hero from '../../sections/Hero';
import Service from '../../components/Service';
import Contact from '../../sections/Contact';
import { SERVICES } from '../../config/data';

class Services extends Component {
  render() {
    return (
      <div className="site-content">
        <Hero>
          <h1 className="title title-responsive text-primary font-weight-bold text-center">Our services</h1>
        </Hero>
        {
          SERVICES.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              id={service.slug}
              description={service.description}
              services={service.services}
            />
          ))
        }
        <Contact />
      </div>
    );
  }
}

export default Services;
