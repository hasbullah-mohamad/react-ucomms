/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Pack extends Component {
  render() {
    const {
      className, title, content, action, onClick
    } = this.props;
    return (
      <div className={`pack-card ${className}`} onClick={onClick}>
        <div className="slick-content">
          <h4 className="title">{title}</h4>
          <div className="content">{content}</div>
          <div className="action">
            <NavLink smooth className="btn btn-white" to={`/${action}`} style={{ width: 212 }}>
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Pack.defaultProps = {
  className: '',
  title: '',
  content: '',
  action: '',
  onClick: () => {}
};

export default Pack;
