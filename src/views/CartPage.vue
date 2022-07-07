<template>
  <main class="text-white">
    <TheHeader />
    <AppHero />
    <AppHome />
    <ServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import AppHero from "@/components/AppHero.vue";
import AppHome from "@/components/AppHome.vue";
import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    AppHero,
    AppHome,
     ServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

