import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Nav, NavbarBrand, NavbarToggler, Collapse, Navbar, NavItem, NavLink, Button
} from 'reactstrap';
import Bitmaps from '../../theme/Bitmaps';
import Icons from '../../theme/Icons';
import Icon from '../../components/Icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    document.body.classList.toggle('navigation-opened');
  }

  handleClose() {
    document.body.classList.remove('navigation-opened');
  }

  render() {
    return (
      <div className="site-header">
        <Nav className="navigation-bar">
          <NavbarBrand className="navbar-logo" tag={Link} to="/" onClick={this.handleClose.bind(this)}>
            <img src={Bitmaps.logo} alt="brand logo" />
          </NavbarBrand>
          <div className="main-menu">
            <Navbar>
              <NavItem>
                <NavLink tag={Link} to="/about" onClick={this.handleClose.bind(this)}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/services" onClick={this.handleClose.bind(this)}>
                  Our Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/team" onClick={this.handleClose.bind(this)}>
                  Our team
                </NavLink>
              </NavItem>
            </Navbar>
            <div className="navbar-right">
              <Button
                color="primary"
                type="button"
                className="mr-2"
              >
                <Icon source={Icons.phone} size="16px" className="mr-2" />
                1800 870 649
              </Button>
              <Button
                type="button"
                color="white"
              >
                <Icon source={Icons.chat} size="24px" className="mr-2" />
                Chat
              </Button>
            </div>
          </div>
          <NavbarToggler onClick={this.handleToggle} />
        </Nav>
      </div>
    );
  }
}

export default Header;
