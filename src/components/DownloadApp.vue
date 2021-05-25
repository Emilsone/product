<template>
  <section class="bg-download body-font relative">
    <div class="">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center relative"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full md:w-2/5 justify-center lg:items-start items-center text-center md:text-left hero-text"
        >
          <p class="leading-normal text-lg mb-4 py-2">
            Welcome to Farmpro. Our products are freshly harvested, washed ready
            for box and finally delivered from our farm right to your doorstep.
          </p>
          <div class="flex flex-row items-center justify-between lg:items-start  ">
            <img class="w-40 px-4" src="../assets/play_store.png" />
            <img class="w-40 px-4" src="../assets/play_store.png" />
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-12 md:py-6 text-center  ">
          <img
            class="w-full md:w-4/5 z-50  bottom-0 left-0 right-0"
            src="../assets/iphone-x-mockup.png"
            alt
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DownloadApp",
};
</script>
<style>
.bg-download {
  background-color: #f4f3f1;
  color: black;
}
</style>