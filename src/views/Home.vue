<template>
  <main>
    <NavBar />
    <Hero />
    <HowWeWork />
    <DeliveryPage />
    <Footer />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import DeliveryPage from "@/components/DeliveryPage.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Hero,
    HowWeWork,
    DeliveryPage,
    Footer,
  },
};
</script>
<style scoped>
</style>

