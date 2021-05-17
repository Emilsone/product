<template>
  <section class="hero-section">
    <main>
      <HeroContent />
    </main>
  </section>
</template>
<script>
import HeroContent from "@/components/HeroContent.vue";
export default {
  name: "Hero",
  components: {
    HeroContent,
  },
};
</script>
<style>
.hero-section {
  background-image: url("../assets/home-bg.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
}
</style>