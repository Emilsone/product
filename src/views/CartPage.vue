<template>
  <main class="text-white">
    <TheHeader />
    <AppHero />
    <AppServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import AppHero from "@/components/AppHero.vue";
import AppServicePage from "@/components/AppServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    AppHero,
    AppServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

