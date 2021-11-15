<template>
  <div :class="className" @click="move()">
    <span :class="cellTextClassName"> {{ value }}</span>
  </div>
</template>

<script>
import classNames from "classnames";
import { mapGetters } from "vuex";

export default {
  name: "Cell",
  props: {
    coordinate: String,
  },
  methods: {
    move() {
      if (!this.gameFinished) {
        this.$store.commit("makeTurn", this.coordinate);
      }
    },
  },
  computed: {
    ...mapGetters(["gameFinished", "winningLine"]),
    cellTextClassName() {
      return classNames({
        "cell-text": !this.isWinner,
        "cell-text-winning": this.isWinner,
      });
    },
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
          cell: !this.value && !this.gameFinished,
          "cell-filled": this.value,
          "cell-winning": this.isWinner,
        }
      );
    },
    isWinner() {
      if (this.winningLine) {
        return this.winningLine.includes(this.coordinate);
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
.cell-text {
  color: white;
  font-size: 3rem;
}
.cell-text-winning {
  font-size: 4rem;
  color: aquamarine;
  z-index: 1;
}
.cell:hover {
  background: rgba(158, 245, 158, 0.3);
}
</style>
