import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const emptyBoard = {
  "(0,0)": undefined,
  "(0,1)": undefined,
  "(0,2)": undefined,
  "(1,0)": undefined,
  "(1,1)": undefined,
  "(1,2)": undefined,
  "(2,0)": undefined,
  "(2,1)": undefined,
  "(2,2)": undefined,
};
export const mutations = {
  gameOver: (state) => {
    state.Board = { ...emptyBoard };
    state.CurrentPlayer = "X";
    return state;
  },
  makeTurn: (state, coordinate) => {
    if (state.Board[coordinate] !== undefined) {
      return state;
    } else {
      state.Board[coordinate] = state.CurrentPlayer;
      if (state.CurrentPlayer === "O") {
        state.CurrentPlayer = "X";
      } else {
        state.CurrentPlayer = "O";
      }
      return state;
    }
  },
};

function checkRow(board, row) {
  if (
    board[`(${row},0)`] === board[`(${row},1)`] &&
    board[`(${row},1)`] === board[`(${row},2)`] &&
    board[`(${row},0)`] !== undefined
  ) {
    return [`(${row},0)`, `(${row},1)`, `(${row},2)`];
  }
  return undefined;
}

function checkColumn(board, column) {
  if (
    board[`(0,${column})`] === board[`(1,${column})`] &&
    board[`(1,${column})`] === board[`(2,${column})`] &&
    board[`(0,${column})`] !== undefined
  ) {
    return [`(0,${column})`, `(1,${column})`, `(2,${column})`];
  }
  return undefined;
}

function checkDiag1(board) {
  if (
    board["(0,0)"] === board["(1,1)"] &&
    board["(0,0)"] === board["(2,2)"] &&
    board["(2,2)"] !== undefined
  ) {
    return ["(0,0)", "(1,1)", "(2,2)"];
  }
  return undefined;
}

function checkDiag2(board) {
  if (
    board["(0,2)"] === board["(1,1)"] &&
    board["(1,1)"] === board["(2,0)"] &&
    board["(2,0)"] !== undefined
  ) {
    return ["(0,2)", "(1,1)", "(2,0)"];
  }
  return undefined;
}

function checkWinningLine(board) {
  return (
    checkRow(board, 0) ||
    checkRow(board, 1) ||
    checkRow(board, 2) ||
    checkColumn(board, 0) ||
    checkColumn(board, 1) ||
    checkColumn(board, 2) ||
    checkDiag1(board) ||
    checkDiag2(board)
  );
}

function checkWinner(board) {
  const line = checkWinningLine(board);
  if (line) {
    return board[line[0]];
  }
  return undefined;
}

export const getters = {
  gameFinished: (state) => {
    if (checkWinner(state.Board)) {
      return true;
    }

    for (const cell in state.Board) {
      if (state.Board[cell] === undefined) {
        return false;
      }
    }
    return true;
  },
  winner: (state) => {
    return checkWinner(state.Board);
  },
  winningLine: (state) => {
    return checkWinningLine(state.Board);
  },
};

export default new Vuex.Store({
  state: {
    CurrentPlayer: "X",
    Board: { ...emptyBoard },
  },
  mutations,
  getters,
});
