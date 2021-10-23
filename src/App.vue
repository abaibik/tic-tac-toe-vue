<template>
  <div class="container">
    <h1>Tic-Tac-Toe</h1>
    <div class="board-and-button d-flex justify-content-around">
      <Board class="mt-5" />
      <div class="button-div align-self-center">
        <div class="reload-text mb-5" v-if="$store.getters.gameFinished">
          <h3>Game finished!</h3>
          <span>To start a new game, press the button:</span>
        </div>

        <button @click="reload()" class="btn btn-success">
          Start new game
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: { Board },
  methods: {
    reload() {
      this.$store.commit("gameOver");
    },
  },
};
</script>

<style lang="scss">
$enable-grid-classes: false;
$enable-cssgrid: true;

@import "bootstrap";
</style>
