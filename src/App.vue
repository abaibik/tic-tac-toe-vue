<template>
  <div class="container">
    <h1>Tic-Tac-Toe</h1>
    <Board class="mt-5" />
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  props: {
    value: String,
  },
  components: { Board },
};
</script>

<style lang="scss">
$enable-grid-classes: false;
$enable-cssgrid: true;

@import "bootstrap";
</style>
