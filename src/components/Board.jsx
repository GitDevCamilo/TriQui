import { useState } from "react";
import confetti from "canvas-confetti";

import { Square, SquareTurn } from "./Square";
import { TURNS } from "../constant/TURNS.JS";
import { checkWinner } from "../logic/checkWinner";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="flex flex-col w-fit mx-auto mt-8 text-center select-none">
      <h1 className="flex items-center justify-center min-h-36 font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600 text-9xl">
        TriQui
      </h1>
      <section className="flex justify-center mb-3 relative rounded-md gap-2.5">
        <SquareTurn isSelected={turn === TURNS.X}>{TURNS.X}</SquareTurn>
        <SquareTurn isSelected={turn === TURNS.O}>{TURNS.O}</SquareTurn>
      </section>
      <section className="grid grid-cols-3 gap-2.5">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <button
        onClick={resetGame}
        className="w-fit p-1 my-6 mx-auto border-solid border-2 border-gray-400 text-2xl hover:bg-slate-200 rounded-md"
        // onClick={resetGame}
      >
        Reset del juego
      </button>

      {winner !== null && (
        <section className="winner absolute w-screen h-screen top-0 left-0 grid place-items-center bg-slate-800 bg-opacity-70">
          <div className="bg-slate-200 h-72 w-80 border-2 border-slate-200 rounded-md flex flex-col justify-around items-center">
            <h2 className="text-4xl">
              {winner === false ? "Empate" : `Ganador`}
            </h2>

            <header className="text-4xl my-0 mx-auto border border-slate-400 rounded-md p-2 flex">
              {winner && winner}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
};

export default Board;
