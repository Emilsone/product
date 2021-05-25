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
          <h1 class="text-4xl font-bold py-3">Download Our App</h1>
          <p class="leading-normal text-lg mb-4 py-2">
            Get your products washed ready for box and finally delivered from
            our farm right to your doorstep.
          </p>
          <div
            class="flex flex-row items-center justify-between lg:items-start py-2"
          >
            <img
              class="object-cover object-center h-full w-full px-4"
              src="../assets/appstore-btn.png"
            />
            <img
              class="object-cover object-center h-full w-full px-4"
              src="../assets/googleplay-btn.png"
            />
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 my-0 md:py-6 text-center">
          <img
            class="w-full md:w-4/5 md:ml-32 ml-0"
            src="../assets/mock-up.png"
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
  height: 65vh;
}
</style>