<template>
  <div class="board">
    <Cell v-for="cell in 9" :key="cell" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cell from "./Cell.vue";

export default {
  name: "Board",
  data() {
    return {};
  },
  computed: {
    ...mapState({}),
  },
  props: {
    value: String,
  },
  components: { Cell },
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
  height: 400px;
  width: 400px;
  grid-auto-rows: 33.3%;
  grid-auto-columns: 33.3%;
  grid-template-columns: repeat(3, 1fr);
}
</style>
