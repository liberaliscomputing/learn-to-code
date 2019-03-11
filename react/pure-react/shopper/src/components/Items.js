import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';


const Items = ({ items, handleAddToCart }) => {
  return (
    <table className="table table-hover">
      <tbody>
        {
          items.map(item => 
            <Item 
              key={item.id} 
              item={item} 
            >
              <button 
                className="btn btn-primary"
                children={"Add to Cart"}
                onClick={() => handleAddToCart(item)}
              />
            </Item>
          )
        }
      </tbody>
    </table>
  );
};

Items.propTypes = {
  items: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Items;
