<template>
  <main class="text-white hero-section">
    <TheHeader />
    <Hero />
    <HowWeWork />
    <DeliveryPage />
    <ProductsContent />
    <DownloadApp />
    <AppServicePage />
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
import AppServicePage from "@/components/AppServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    Hero,
    HowWeWork,
    DeliveryPage,
    ProductsContent,
    DownloadApp,
    AppServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

