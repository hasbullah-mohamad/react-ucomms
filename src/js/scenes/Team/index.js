import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Hero from '../../sections/Hero';
import Section from '../../sections/Section';
import Team from '../../components/Team';
import Contact from '../../sections/Contact';
import { TEAMS } from '../../config/data';

class Teams extends Component {
  render() {
    return (
      <div className="site-content">
        <Hero>
          <h1 className="title title-responsive text-primary font-weight-bold text-center">Our team</h1>
        </Hero>
        <Section className="section-teams">
          <Container>
            <Row>
              {
                TEAMS.map((item, index) => (
                  <Col md={6} key={index}>
                    <Team
                      image={item.image}
                      name={item.name}
                      position={item.position}
                      content={item.content}
                    />
                  </Col>
                ))
              }
            </Row>
          </Container>
        </Section>
        <Contact />
      </div>
    );
  }
}

export default Teams;
