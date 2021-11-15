<template>
  <div class="board">
    <Cell
      v-for="cell in [
        '(0,0)',
        '(0,1)',
        '(0,2)',
        '(1,0)',
        '(1,1)',
        '(1,2)',
        '(2,0)',
        '(2,1)',
        '(2,2)',
      ]"
      :key="cell"
      :coordinate="cell"
    />
    <WinningLine v-if="winner" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Cell from "./Cell.vue";
import WinningLine from "./WinningLine.vue";

export default {
  name: "Board",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["winner"]),
  },
  props: {
    value: String,
  },
  components: { Cell, WinningLine },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.board {
  display: grid;
  height: 25rem;
  width: 25rem;
  grid-auto-rows: 33.3%;
  grid-auto-columns: 33.3%;
  grid-template-columns: repeat(3, 1fr);
}
</style>
