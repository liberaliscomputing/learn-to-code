import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  const headerClass = classNames(
    'font-mono',
  );

  return (
    <div className={headerClass}>
      <h1>{text}</h1>
    </div>
  )
}

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: null,
};

export default Header;
