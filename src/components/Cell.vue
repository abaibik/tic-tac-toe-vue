<template>
  <div class="g-col-4 h-100 w-100 border" @click="$emit('click')">
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
    value: String,
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
