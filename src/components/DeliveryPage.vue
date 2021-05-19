<template>
  <section class="text-gray-600 body-font bg-section mt-24">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text font-bold"
        >
          ~~ Delivery Process ~~
        </p>
        <h1 class="sm:text-3xl text-2xl font-bold title-font text-black mb-4">
          OUR DELIVERY PROCESS
        </h1>
      </div>
      <div class="flex flex-wrap justify-around md:justify-center">
        <div class="lg:w-1/4 w-5/6 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <div
              class=" icon-bg w-40 h-40 inline-flex items-center justify-center rounded-full bg-gray-200 icon mb-5 flex-shrink-0"
            >
              <i
                class="fa fa-home align-center flex justify-center"
                aria-hidden="true"
              ></i>
            </div>

            <h2
              class="text-gray-900 font-medium title-font tracking-wider text-sm"
            >
              01.
            </h2>
            <p class="leading-relaxed">Connect to nearest farm</p>
          </div>
        </div>
        <div class="lg:w-1/4 w-5/6 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <div
              class=" icon-bg w-40 h-40 inline-flex items-center justify-center rounded-full bg-gray-200 icon mb-5 flex-shrink-0"
            >
              <i
                class="fa fa-leaf align-center flex justify-center"
                aria-hidden="true"
              ></i>
            </div>
            <h2
              class="text-gray-900 font-medium title-font tracking-wider text-sm"
            >
              02.
            </h2>
            <p class="leading-relaxed">Place your order</p>
          </div>
        </div>
        <div class="lg:w-1/4 w-5/6 lg:mb-0 mb-6 p-4 md:mx-auto">
          <div class="h-full text-center">
            <div
              class=" icon-bg w-40 h-40 inline-flex items-center justify-center rounded-full bg-gray-200 icon mb-5 flex-shrink-0"
            >
              <i
                class="fa fa-map align-center flex justify-center"
                aria-hidden="true"
              ></i>
            </div>

            <h2
              class="text-gray-900 font-medium title-font tracking-wider text-sm"
            >
              03.
            </h2>
            <p class="leading-relaxed">Choose location</p>
          </div>
        </div>
        <div class="lg:w-1/4 w-5/6 lg:mb-0 p-4 md:mx-auto">
          <div class="h-full text-center">
            <div
              class=" icon-bg w-40 h-40 inline-flex items-center justify-center rounded-full bg-gray-200 icon mb-5 flex-shrink-0"
            >
              <i
                class="fa fa-truck align-center  flex justify-center"
                aria-hidden="true"
              ></i>
            </div>

            <h2
              class="text-gray-900 font-medium title-font tracking-wider text-sm"
            >
              04.
            </h2>
            <p class="leading-relaxed">Delivery time</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DeliveryPage",
};
</script>
<style >
.bg-section {
  background-color: #f4f3f1;
}
.icon{
  color: #3d9421;
  font-size:3rem;
}
.icon-bg:hover{
 background-color: #3d9421;
  font-size:2rem;
  color:#ffff;
  border: 10px solid #f4f3f1;
}
</style>