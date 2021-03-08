import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';

class Clients extends Component {
  render() {
    return (
      <Section className="section-clients bg-light">
        <Container>
          <h4 className="title">
            Our clients
          </h4>
          <Row>
            <Col lg={6}>
              <p>uComms provides research, comms and analytics services to dozens of Australian companies.</p>
              <p>Specialising in the NGO and NFP space, uComms was founded on the belief that sophisticated digital tools should be available for everyone, not just large corporates. By providing high quality, low cost services, uComms is able to offer a highly competitive advantage to the non-competitive sector.</p>
            </Col>
            <Col lg={6}>
              <p>We proudly stand as the polling company who confidently predicted a large ALP win in Victoria, and have experience and dedicated solutions for Trade Unions, Charities, Political Activists, Global NGOs, Local Interest Associations, and more.</p>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Clients;
