import React, { Component } from 'react';
import { connect } from 'react-redux';

import { decrease, increase } from '../actions';


class Counter extends Component {

  handleDecrease = () => {
    this.props.decrease();
  }

  handleIncrease = () => {
    this.props.increase();
  }

  render() {
    const { count } = this.props;

    return (
      <div className="container">
        <h1 children={'Counter'} />
        <div className="input-group">
          <button 
            className="btn btn-danger"
            children={'-'}
            onClick={this.handleDecrease}
          />
          <input
            type="text"
            className="form-control"
            value={count}
            readOnly
          />
          <button 
            className="btn btn-success"
            children={'+'}
            onClick={this.handleIncrease}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};
const mapDispatchToProps = { decrease, increase };

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter);
