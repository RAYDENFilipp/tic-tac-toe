import React, { Component } from 'react';
import Board from '../components/Board';
import calculateWinner from '../components/calculateWinner';
import showColRow from "../components/showColRow";
export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true//first move to be X by default
        };
    }

    //handleClick function to return early by ignoring a click if someone has won the game or if a Square is already filled
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice(); //creates a copy of an existing array
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([
                {
                squares: squares,
                currentLocation: showColRow(i)
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

// For each move in the tic-tac-toes’s game’s history, we create a list item <li> which contains a button <button>. The button has a onClick handler which calls a method called this.jumpTo().
        const moves = history.map((step, move) => {
            const desc = move && step.currentLocation ?
                `Go to move #${move}, ${step.currentLocation}`:
                `Go to the game start`;
                const boldButton = move === this.state.stepNumber ? 'bold-list-item' : '';
            return(
                <li key={move}>
                    <button className={boldButton} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        
        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
        }
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board
                    squares={current.squares}
                    onClick={i => this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
