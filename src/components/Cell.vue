<template>
  <div class="g-col-4 h-100 w-100 border" @click="move()">
    {{ value }}
  </div>
</template>

<script>
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
    value() {
      return this.$store.state.Board[this.coordinate];
    },
  },
};
</script>
