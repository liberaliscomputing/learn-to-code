import React from 'react';
import PropTypes from 'prop-types';


const NavTabs = ({ clickedTab, handleTabChange }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a 
          className={
            clickedTab === 'items' 
            ? 'nav-link active' 
            : 'nav-link'
          }
          onClick={() => handleTabChange('items')}
          children={'Items'}
          href="#items"
        />
      </li>
      <li className="nav-item">
        <a 
          className={
            clickedTab === 'cart' 
            ? 'nav-link active' 
            : 'nav-link'
          }
          onClick={() => handleTabChange('cart')}
          children={'Cart'}
          href="#cart"
        />
      </li>
    </ul>
  );
};

NavTabs.propTypes = {
  clickedTab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default NavTabs;
