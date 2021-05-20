<template>
  <main class="text-white hero-section">
    <TheHeader />
    <Hero />
    <HowWeWork />
    <DeliveryPage />
    <ProductsContent />
    <DownloadApp />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import Hero from "@/components/Hero.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import DeliveryPage from "@/components/DeliveryPage.vue";
import ProductsContent from "@/components/ProductsContent.vue";
import DownloadApp from "@/components/DownloadApp.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero,
    HowWeWork,
    DeliveryPage,
    ProductsContent,
    DownloadApp,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

