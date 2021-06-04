<template>
  <main class="text-white">
    <TheHeader />
    <WishHero />
    <AppHome />
    <AppServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import WishHero from "@/components/WishHero.vue";
import AppHome from "@/components/AppHome.vue";
import AppServicePage from "@/components/AppServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    WishHero,
    AppHome,
    AppServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

