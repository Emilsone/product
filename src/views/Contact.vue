<template>
  <main>
  
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Contact",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style >
.link {
  color: #3d9421 !important;
}
.form {
  background-color: #3d9421;
}
.contact-bg {
  background-image: url("../assets/bg-one.jpg");
  background-size: cover;
  height: 100vh;
  background-blend-mode: hue;
}
</style>
