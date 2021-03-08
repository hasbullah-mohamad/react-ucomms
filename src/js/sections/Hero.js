import React, {
  Component
} from 'react';
import {
  Container
} from 'reactstrap';
import Section from './Section';

class Hero extends Component {
  render() {
    return (
      <Section className="other-hero">
        <Container>
          {this.props.children}
        </Container>
      </Section>
    );
  }
}

export default Hero;
