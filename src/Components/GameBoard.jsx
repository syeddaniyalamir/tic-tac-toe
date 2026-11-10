
import { useState } from "react";
import Style from "../assets/css/GameBoard.module.css";
import Square from "./Square";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

const GameBoard = ({ onQuit }) => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");

  const winner = calculateWinner(boxes);
  const isDraw = !winner && boxes.every((box) => box !== null);

  const handleClick = (index) => {
    if (boxes[index] !== null || winner || isDraw) return;

    const newBoxes = [...boxes];
    newBoxes[index] = currentTurn;

    setBoxes(newBoxes);
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null));
    setCurrentTurn("X");
  };

  return (
    <div className={Style.gameBoard}>
      <h1>TIC TAC TOE</h1>

      <h2>
        {winner
          ? `🎉 Player ${winner} Wins!`
          : isDraw
          ? "🤝 Game Draw!"
          : `Player ${currentTurn}'s Turn`}
      </h2>

      <div className={Style.board}>
        {boxes.map((box, index) => (
          <Square
            key={index}
            value={box}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>

      <div className={Style.gameActions}>
        <button className={Style.resetButton} onClick={resetGame}>
          {winner || isDraw ? "Play Again" : "Reset Game"}
        </button>

        <button className={Style.quitButton} onClick={onQuit}>
          Quit Game
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
