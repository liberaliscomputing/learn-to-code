import React, { Component } from 'react';

import NavTabs from './components/NavTabs';
import Items from './components/Items'; 
import Cart from './components/Cart';
import { items } from './data';


class App extends Component {
  state = { 
    clickedTab: 'items', 
    itemsInCart: [],
  };

  handleTabChange = (clickedTab) => {
    this.setState({ clickedTab });
  }

  handleAddToCart = (selectedItem) => {
    const { itemsInCart } = this.state;
    this.setState({
      itemsInCart: [...itemsInCart, selectedItem],
    });
  }

  reduceItems = (items) => {
    const itemCount = items.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 0;
      acc[item.id]++;

      return acc;
    }, {});

    const reducedItems = Object
      .keys(itemCount)
      .map(id => {
        const item = items.find(
          item => item.id === parseInt(id)
        );

        return {
          ...item,
          count: itemCount[id],          
        };
      });
    
    return reducedItems;
  }

  handleRemoveItem = (selectedItem) => {
    
  }

  render() {
    const { clickedTab, itemsInCart } = this.state;

    return (
      <div className="container">
        <NavTabs 
          clickedTab={clickedTab} 
          handleTabChange={this.handleTabChange} 
        />
        { 
          clickedTab === 'items' 
          ? <Items 
              items={items}
              handleAddToCart={this.handleAddToCart}
            />
          : <Cart 
              items={this.reduceItems(itemsInCart)}
              handleRemoveItem={this.handleRemoveItem}
              handleAddItem={this.handleAddToCart}
            />
        }
      </div>
    );
  }
}

export default App;
