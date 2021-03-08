import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';

class Intelligence extends Component {
  render() {
    return (
      <Section className="section-intelligence bg-light">
        <Container>
          <Row className="flex-wrap-reverse">
            <Col lg={6}>
              <img className="featured-image" src={Bitmaps.intelligence} alt="Intelligence" />
            </Col>
            <Col lg={6}>
              <h2 className="title title-responsive">
                Innovation and
                <span className="font-weight-bold text-primary"> intelligence. </span>
              </h2>
              <div className="content">
                <p>Stay ahead of the curve with uComms' industry-leading solutions. We make sure you've got the latest in communications technology right at your fingertips in one easy-to-use platform.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Intelligence;
