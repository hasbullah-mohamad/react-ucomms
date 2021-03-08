import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Section from '../../sections/Section';
import Bitmaps from '../../theme/Bitmaps';

class Chanel extends Component {
  render() {
    return (
      <Section className="section-chanel">
        <Container>
          <Row>
            <Col lg={7}>
              <h2 className="title title-responsive">
                uComms has been set up to help you send the right message to the right people in the
                <span className="font-weight-bold text-primary"> right chanel.</span>
              </h2>
              <div className="content">
                <p>Led by James Stewart, co-founder of Reachtel, uComms utilises deep experience to provide you with Australia's most comprehensive, useful and powerful market research, communications and analytics platform.</p>
                <p>Whether you need to gain new insights and intelligence, send automated targeted voice, email or SMS campaigns, host Tele Town Hall events or gather and analyse valuable data to realise your strategic objectives, uComms can help you send the right message to achieve the best outcomes.</p>
              </div>
            </Col>
            <Col lg={5}>
              <img className="featured-image" src={Bitmaps.oval} alt="Oval" />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

export default Chanel;
