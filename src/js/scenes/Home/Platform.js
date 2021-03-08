import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';

class Platform extends Component {
  render() {
    return (
      <Section className="section-platform">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="title title-responsive">
                Your
                <span className="font-weight-bold text-primary"> comprehensive </span>
                research, messaging and analytics platform.
              </h2>
              <div className="content">
                <p>uComms empowers you to gather intelligence and identify your target markets, use powerful digital tools to communicate with optimised and responsive channels, and provide simple yet granular reporting analytics.</p>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img className="featured-image" src={Bitmaps.phone} alt="Phone" />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Platform;
