import React, {
  Component
} from 'react';
import {
  Container
} from 'reactstrap';
import Slick from 'react-slick';
import Section from '../../sections/Section';
import Pack from '../../components/Pack';
import { ITEMS } from '../../config/data';
import Icon from '../../components/Icons';

class Hero extends Component {
  render() {
    return (
      <Section className="home-hero">
        <Container>
          <h1 className="title title-responsive">
            Helping you send the
            <span className="text-primary font-weight-bold"> right message.</span>
          </h1>
          <div className="hero-carousel">
            <ul className="slick-menu">
              {
                ITEMS.map((item, key) => (
                  <li className="menu-item d-flex" key={key}>
                    <Icon source={item.icon} size="16px" className="mr-2" />
                    <div className="font-weight-bold font-size-lg text-primary">{item.title}</div>
                  </li>
                ))
              }
            </ul>
            <Slick
              dots
              slidesToShow={1}
              autoplay
              autoplaySpeed={5000}
              arrows={false}
            >
              {
                ITEMS.map((item, index) => (
                  <div key={index}>
                    <Pack
                      items={ITEMS}
                      title={item.title}
                      content={item.content}
                      action={item.action}
                    />
                  </div>
                ))
              }
            </Slick>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Hero;
