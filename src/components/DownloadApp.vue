<template>
  <section class="bg-download body-font my-12">
    <div class="md:flex items-center lg:pt-40">
      <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
        <div class="relative">
          <img
            src="../assets/mock-up.png"
            class="w-full relative z-10"
            alt=""
          />
          <!-- <div
            class="border-4 border-gray-200 absolute top-10 bottom-10 left-10 right-10 z-0"
          ></div> -->
        </div>
      </div>
      <div class="w-full md:w-1/2 px-10">
        <div class="mb-10">
          <h1
            class="font-bold uppercase text-2xl mb-5 md:text-left text-center"
          >
            Download our app
          </h1>
          <p class="text-md leading-7">
            We beleive that access to healthy fresh food is a human right so we
            get our products washed ready for box and finally delivered from our
            farm right to your doorstep. Download our app to get full access to
            our farm products and place your order.
          </p>
        </div>

        <div class="flex flex-col md:flex-row items-center py-2">
          <a href="#">
            <img
              class="object-cover object-center h-full w-full px-4"
              src="../assets/appstore-btn.png"
            />
          </a>
          <a href="#" class="">
            <img
              class="object-cover object-center h-full w-full md:py-0 py-4"
              src="../assets/googleplay-btn.png"
          /></a>
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
  /* background-color: #f4f3f1; */
  color: black;
  height: 100vh;
}
</style>