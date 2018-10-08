import React, { Component } from 'react';
import Square from '../components/Square';

export default class Board extends Component {

    renderSquare(i, cssClass) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                cssClass={cssClass} />
        );
    }

    renderBoard(row, col) {
        const board = [];
        //winner here is undefined, if we wanted a value we would need to do some destructuring
        let winner,
            cellCounter = 0;

        for (let i = 0; i < row; i++) {
            const columns = [];
            for (let j = 0; j < col; j++) {
                // try to see if the counter is included in the array, catch if the winning coords
                try {
                    winner = this.props.winnerCoordinates.includes(cellCounter);
                } catch (error) {}

                columns.push(
                    this.renderSquare(cellCounter++, winner ? "winner" : "")
                    );
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