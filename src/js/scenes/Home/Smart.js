import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';

class Smart extends Component {
  render() {
    return (
      <Section className="section-smart">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="title title-responsive">
                Smart, experienced and local
                <span className="font-weight-bold text-primary"> service.</span>
              </h2>
              <div className="content">
                <p>The uComms team have offices in Melbourne and Brisbane and are there to provide you with excellent service should you need any help with your campaigns or account.</p>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img className="featured-image" src={Bitmaps.australia} alt="Australia" />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Smart;
