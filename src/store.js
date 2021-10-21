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
    return true;
  }
  return false;
}

function checkColumn(board, column) {
  if (
    board[`(0,${column})`] === board[`(1,${column})`] &&
    board[`(1,${column})`] === board[`(2,${column})`] &&
    board[`(0,${column})`] !== undefined
  ) {
    return true;
  }
  return false;
}

export const getters = {
  gameFinished: (state) => {
    if (
      checkRow(state.Board, 0) ||
      checkRow(state.Board, 1) ||
      checkRow(state.Board, 2) ||
      checkColumn(state.Board, 0) ||
      checkColumn(state.Board, 1) ||
      checkColumn(state.Board, 2)
    ) {
      return true;
    }
    if (
      state.Board["(0,0)"] === state.Board["(1,1)"] &&
      state.Board["(0,0)"] === state.Board["(2,2)"] &&
      state.Board["(2,2)"] !== undefined
    ) {
      return true;
    }
    if (
      state.Board["(0,2)"] === state.Board["(1,1)"] &&
      state.Board["(1,1)"] === state.Board["(2,0)"] &&
      state.Board["(2,0)"] !== undefined
    ) {
      return true;
    }
    return false;
  },
  winner: (state) => {
    return state;
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
