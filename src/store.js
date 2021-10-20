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

export const getters = {
  gameFinished: (state) => {
    if (
      state.Board["(0,0)"] === state.Board["(0,1)"] &&
      state.Board["(0,1)"] === state.Board["(0,2)"] &&
      state.Board["(0,0)"] !== undefined
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
