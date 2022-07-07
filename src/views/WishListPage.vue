<template>
  <main class="text-white">
    <TheHeader />
    <WishHero />
    <AppHome />
    <ServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import WishHero from "@/components/WishHero.vue";
import AppHome from "@/components/AppHome.vue";
import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    WishHero,
    AppHome,
    ServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

