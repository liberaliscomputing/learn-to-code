import React, { Component } from 'react';
import classNames from 'classnames';
import { random, getWinner } from '../utils';
import Header from './Header';
import Reset from './Reset';
import Board from './Board';

class Game extends Component {
  state = { 
    history: [{ cells: Array(9).fill('.') }],
    next: random(['x', 'o']),
  }

  handleReset = e => {
    const history = this.state.history.slice();
    history.push({ cells: Array(9).fill('.') });
    this.setState({ 
      history, 
      next: random(['x', 'o']) ,
    });
  }

  handleClick = i => {
    const history = this.state.history
    const current = history[history.length - 1];
    const cells = current.cells.slice();

    if (getWinner(cells)) {
      alert('game\'s done!');
      return;
    } else if (cells[i] && cells[i] !== '.') {
      alert('cell\'s already taken!');
      return;
    }

    cells[i] = this.state.next;
    this.setState({ 
      history: history.concat([{ cells }]),
      next: this.state.next === 'x' ? 'o': 'x',
    }, () => { console.log(cells); });
  }

  render() {
    const { history, next } = this.state;
    const current = history[history.length - 1];
    const winner = getWinner(current.cells);

    const gameClass = classNames(
      'w-screen',
      'h-screen',
      'flex',
      'flex-col',
      'justify-center',
      'items-center',
    );

    return (
      <div className={gameClass}>
        <Header 
          text={
            winner 
            ? `winner: ${winner}` 
            : `next player: ${next}`
          } 
        />
        <br />
        <Reset onClick={this.handleReset} />
        <br />
        <Board 
          cells={current.cells} 
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Game;
