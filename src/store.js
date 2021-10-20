import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mutations = {
  gameOver: (state) => {
    return state;
  },
  makeTurn: (state, coordinate) => {
    state.Board[coordinate] = state.CurrentPlayer;
    if (state.CurrentPlayer === "O") {
      state.CurrentPlayer = "X";
    } else {
      state.CurrentPlayer = "O";
    }
    return state;
  },
};

export const getters = {
  gameFinished: (state) => {
    return state;
  },
  winner: (state) => {
    return state;
  },
};

export default new Vuex.Store({
  state: {
    CurrentPlayer: "X",
    Board: {
      "(0,0)": undefined,
      "(0,1)": undefined,
      "(0,2)": undefined,
      "(1,0)": undefined,
      "(1,1)": undefined,
      "(1,2)": undefined,
      "(2,0)": undefined,
      "(2,1)": undefined,
      "(2,2)": undefined,
    },
  },
  mutations,
  getters,
});
