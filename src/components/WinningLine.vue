<template>
  <svg
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    class="winning-line"
  >
    <line
      :x1="coordStart[0]"
      :y1="coordStart[1]"
      :x2="coordEnd[0]"
      :y2="coordEnd[1]"
      stroke="rgba(255, 255, 255, 0.3)"
    />
  </svg>
</template>

<script>
import { mapGetters } from "vuex";

const getCoord = function (coord) {
  const row = coord[1];
  const column = coord[3];
  return [10 * column + 5, 10 * row + 5];
};

export default {
  name: "WinningLine",
  computed: {
    ...mapGetters(["winningLine"]),
    coordStart() {
      const coord = this.winningLine[0];
      return getCoord(coord);
    },
    coordEnd() {
      const coord = this.winningLine[2];
      return getCoord(coord);
    },
  },
};
</script>

<style lang="scss">
$enable-grid-classes: false;
$enable-cssgrid: true;

@import "bootstrap";

.winning-line {
  height: 25rem;
  width: 25rem;
  position: absolute;
  pointer-events: none;
}
</style>
