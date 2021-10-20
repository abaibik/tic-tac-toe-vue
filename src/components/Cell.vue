<template>
  <div class="g-col-4 h-100 w-100 border" @click="move()">
    {{ value }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cell",
  data() {
    return {};
  },
  props: {
    coordinate: String,
  },
  methods: {
    move() {
      this.$store.commit("makeTurn", this.coordinate);
    },
    click() {
      this.$emit("click");
    },
  },
  computed: {
    ...mapState(["Board"]),
    value() {
      return this.Board[this.coordinate];
    },
  },
};
</script>
