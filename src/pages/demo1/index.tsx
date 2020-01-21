import React from 'react';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square"
//         onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }


interface IProps {
  onClick: () => void,
  value: string
}


function Square(props: IProps) {
  return (
    <button className="square"
      onClick={props.onClick} >
      {props.value}
    </button>
  );
}

function calculateWinner(squares: Array<any>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


interface BoardProps {
  squares: Array<any>,
  onClick: (i: number) => void
}
interface BoardState {}

class Board extends React.Component<BoardProps, BoardState> {


  renderSquare(i: number) {
    return <Square value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}


interface GameProps {

}


interface GameState {
  history: Array<any>,
  stepNumber: number,
  xIsNext: boolean
}


class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (i: number) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [
          { squares: squares }
        ]
      ),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };
  jumTo = (step: number) => {
    this.setState(
      {
        history: this.state.history.slice(0, step + 1),
        stepNumber: step,
        xIsNext: (step % 2) === 0
      }
    )
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((value, index) => {
      const desc = !index ? 'Go to game start' : ('go to move #' + index);
      return (
        <li key={index}>
          <button onClick={() => { this.jumTo(index) }}>{desc}</button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;



