import React, { Component } from 'react';
import Square from '../components/Square';

export default class Board extends Component {

    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} />
        );
    }

    renderBoard(row, col) {
        const board = [];
        let cellCounter = 0;

        for (let i = 0; i < row; i++) {
            const columns = [];
            for (let j = 0; j < col; j++) {
                columns.push(this.renderSquare(cellCounter++));
            }
            board.push(
                <div key={i} className='board-row'>
                    {columns}
                </div>
            );
        }
        return board;
    }
// call calculateWinner(squares) in the Board’s render function to check if a player has won. If a player has won, we can display text such as “Winner: X” or “Winner: O”.
    render() {
        return (
            <div>{this.renderBoard(3, 3)}</div>
        )
    }
}