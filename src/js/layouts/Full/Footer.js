import React from 'react';
import {
  Container, Nav, NavItem
} from 'reactstrap';

import Icon from '../../components/Icons';
import Icons from '../../theme/Icons';
import Files from '../../theme/Files';

export const Footer = () => (
  <div className="site-footer">
    <Container>
      <Nav className="footer-main">
        <NavItem className="mr-md-3 mb-md-0 mb-4">
          Copyright © 2008 -&nbsp;
          <span>
            {new Date().getFullYear()}
          </span>
          &nbsp;ReachTEL Pty Ltd From Equifax
        </NavItem>
        <NavItem>
          <a className="text-white font-weight-bold font-size-sm mr-2" href={Files.privacy} target="_blank">Privacy</a>
          ABN 40 133 677 933
          &nbsp;&nbsp;
          <div className="flip-animation">
            <a className="anim-flip-logo d-flex p-0" href="https://www.weareflip.com" target="_blank">
              A genuine&nbsp;
              <Icon
                className="d-block"
                source={Icons.flip}
                size="25px"
              />
              &nbsp;site
            </a>
          </div>
        </NavItem>
      </Nav>
    </Container>
  </div>
);

export default Footer;
