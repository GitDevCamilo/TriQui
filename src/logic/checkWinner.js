import { WINNER_COMBOS } from "../constant/WINNER_COMBOS.JS";

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[c] === boardToCheck[a]
    ) {
      return boardToCheck[a];
    }
  }

  return null;
};
