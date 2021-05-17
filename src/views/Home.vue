<template>
  <main class="text-white hero-section">
    <NavBar />
    <Hero />
    <HowWeWork />
    <DeliveryPage />
    <DownloadApp />
    <Footer />
  </main>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import DeliveryPage from "@/components/DeliveryPage.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Hero,
    HowWeWork,
    DeliveryPage,
    DownloadApp,
    Footer,
  },
};
</script>
<style scoped>
</style>

