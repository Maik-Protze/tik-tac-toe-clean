import React, { useState, useEffect } from 'react';
import Square from './Square';

type Mode = "2player" | "easy" | "hard";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState<Mode>("2player");

  useEffect(() => {
    if (
      (mode === "easy" || mode === "hard") &&
      !xIsNext &&
      !calculateWinner(squares)
    ) {
      const aiMove =
        mode === "easy" ? getRandomAIMove(squares) : getMinimaxAIMove(squares);
      if (aiMove !== null) {
        setTimeout(() => handleClick(aiMove), 500);
      }
    }
    // eslint-disable-next-line
  }, [xIsNext, squares, mode]);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Gewinner: " + winner;
  } else if (squares.every(Boolean)) {
    status = "Unentschieden!";
  } else {
    status =
      "Nächster Spieler: " +
      (xIsNext
        ? "X" + (mode === "2player" ? "" : " (Du)")
        : mode === "2player"
        ? "O"
        : "O (KI)");
  }

  function renderSquare(i: number) {
    return (
      <Square value={squares[i]} onClick={() => handleClick(i)} key={i} />
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => { setMode("2player"); resetGame(); }}>2 Spieler</button>
        <button onClick={() => { setMode("easy"); resetGame(); }}>Einfache KI</button>
        <button onClick={() => { setMode("hard"); resetGame(); }}>Starke KI</button>
        <button onClick={resetGame}>Neustart</button>
      </div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

// Zufalls-KI
function getRandomAIMove(squares: (string | null)[]): number | null {
  const emptyIndices = squares
    .map((val, idx) => (val === null ? idx : null))
    .filter((v) => v !== null) as number[];
  if (emptyIndices.length === 0) return null;
  const randomIdx = Math.floor(Math.random() * emptyIndices.length);
  return emptyIndices[randomIdx];
}

// Starke KI (Minimax)
function getMinimaxAIMove(squares: (string | null)[]): number | null {
  let bestScore = -Infinity;
  let move: number | null = null;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      const score = minimax(squares, 0, false);
      squares[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(squares: (string | null)[], depth: number, isMaximizing: boolean): number {
  const winner = calculateWinner(squares);
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (squares.every(Boolean)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "O";
        bestScore = Math.max(bestScore, minimax(squares, depth + 1, false));
        squares[i] = null;
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "X";
        bestScore = Math.min(bestScore, minimax(squares, depth + 1, true));
        squares[i] = null;
      }
    }
    return bestScore;
  }
}

// Gewinner-Ermittlung
function calculateWinner(squares: (string | null)[]) {
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
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;