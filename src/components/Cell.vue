<template>
  <div :class="className" @click="move()">
    <span class="cell-text fs-1"> {{ value }}</span>
  </div>
</template>

<script>
import classNames from "classnames";

export default {
  name: "Cell",
  props: {
    coordinate: String,
  },
  methods: {
    move() {
      if (!this.$store.getters.gameFinished) {
        this.$store.commit("makeTurn", this.coordinate);
      }
    },
  },
  computed: {
    className() {
      return classNames(
        "g-col-4",
        "h-100",
        "w-100",
        "border",
        "border-white",
        "d-flex",
        "justify-content-center",
        "align-items-center",
        {
          cell: !this.value,
          "cell-filled": this.value,
          "cell-winning": this.isWinner,
        }
      );
    },
    isWinner() {
      if (this.$store.getters.winningLine) {
        return this.$store.getters.winningLine.includes(this.coordinate);
      }
      return false;
    },
    value() {
      return this.$store.state.Board[this.coordinate];
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap");
.cell-text {
  font-family: "Noto Sans Mono", monospace;
  color: white;
}
.cell:hover {
  background: rgba(158, 245, 158, 0.3);
}
</style>
