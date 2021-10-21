<template>
  <div
    class="
      g-col-4
      h-100
      w-100
      border
      d-flex
      justify-content-center
      align-items-center
    "
    @click="move()"
  >
    <span class="cell-text fs-1"> {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    coordinate: String,
  },
  methods: {
    move() {
      this.$store.commit("makeTurn", this.coordinate);
    },
  },
  computed: {
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
}
</style>
