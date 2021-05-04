<template>
  <div>
    <img
      alt="logo image"
      class="w-24 h-24 mb-2  inline-block"
      src="../assets/farm-logo.png"
    />
    
  </div>
</template>

<script>
export default {
  name: "HeaderLogo",
  props: {
    isStickable: {
      type: Boolean,
      default: false,
    },
    isSticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      let classList = "";
      if (this.isStickable) {
        classList = this.isSticky ? "text-black" : "text-gray-800";
      } else {
        classList = "text-black";
      }
      return classList;
    },
  },
};
</script>
<style scoped>
.dot-text {
  color: #3d9421;
}
</style>
