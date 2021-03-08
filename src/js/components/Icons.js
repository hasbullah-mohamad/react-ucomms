/* eslint-disable react/no-danger */
import React from 'react';
import classnames from 'classnames';

const Icon = (props) => {
  const {
    className, size, style, source, ...rest
  } = props;

  const classNameMap = {
    icon: true,
    'icon-svg': true,
    ...(className ? { [className]: true } : {})
  };

  const styleMap = {
    width: size,
    height: size,
    ...(style || {})
  };

  return (
    <span
      className={classnames(classNameMap)}
      dangerouslySetInnerHTML={{ __html: source }}
      {...rest}
      style={styleMap}
    />
  );
};

Icon.defaultProps = {
  source: null,
  size: '24px'
};

export default Icon;
