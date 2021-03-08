import React, {
  Component
} from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
import Section from '../sections/Section';
import Icon from './Icons';

class Service extends Component {
  render() {
    const {
      id, icon, title, description, services
    } = this.props;
    return (
      <Section className="section-service" id={id}>
        <Container>
          <div className="service-header d-flex align-items-center">
            <Icon source={icon} size="62px" className="mr-4" />
            <div className="header-content">
              <h3 className="title title-responsive text-primary font-weight-semibold mb-0">{title}</h3>
              <div className="header-description">{description}</div>
            </div>
          </div>
          <Row>
            {
              services && services.length > 0 && services.map((item, index) => (
                <Col md={4} key={index}>
                  <div className="service">
                    <h5 className="service-title">{item.title}</h5>
                    <div className="service-content">{item.content}</div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </Section>
    );
  }
}

Service.defaultProps = {
  id: '',
  icon: '',
  title: '',
  description: '',
  services: null
};

export default Service;
