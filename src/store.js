import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mutations = {
  changePlayer: (state) => {
    return state;
  },
  gameOver: (state) => {
    return state;
  },
};

export const getters = {
  checkEmptyCell: (state) => {
    return state;
  },
  winOrDraw: (state) => {
    return state;
  },
};

export default new Vuex.Store({
  state: {
    CurrentPlayer: "X",
    Board: {
      "00": undefined,
      "01": undefined,
      "02": undefined,
      10: undefined,
      11: undefined,
      12: undefined,
      20: undefined,
      21: undefined,
      22: undefined,
    },
  },
  mutations,
  getters,
});
