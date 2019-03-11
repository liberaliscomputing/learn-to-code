import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Cart = ({ items, handleRemoveItem, handleAddItem }) => {
  return (
    <table className="table table-hover">
      <tbody>
        {
          items.length > 0 
          ? items.map(item => 
              <Item 
                key={item.id} 
                item={item}
              >
                <div className="input-group">
                  <button 
                    className="btn btn-danger"
                    children={"-"}
                    onClick={() => handleRemoveItem(item)}
                  />
                  <input 
                    className="form-control" 
                    type="text"
                    value={item.count} 
                    readOnly 
                  />
                  <button 
                    className="btn btn-success"
                    children={"+"}
                    onClick={() => handleAddItem(item)}
                  />
                </div>
              </Item>
            )
          : (
            <tr>
              <td children={'Your cart is empty.'} />
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

Cart.propTypes = {
  items: PropTypes.array.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
