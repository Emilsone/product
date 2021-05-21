<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <p
          class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text font-bold"
        >
          ~~ Our Products ~~
        </p>
        <h1
          class="sm:text-3xl text-2xl font-bold title-font text-black mb-4 mx-auto py-2"
        >
          Featured Products
        </h1>
      </div>

      <!-- <ProductList @tabchange="changeTab($event)" /> -->
      <div class="product____container" v-show="tabActiveIndex == 0">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/424x264"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/425x265"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/427x267"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/428x268"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center align-center lg:mt-12">
        <a href="#" class="btn p-4 px-6 text-white">View More Products</a>
      </div>
      <!-- <div class="furniture-container " v-show="tabActiveIndex == 1">
        <Furniture />
      </div>
      <div class="lighting-container " v-show="tabActiveIndex == 2">
        <Lighting />
      </div>
      <div class="sofa-container " v-show="tabActiveIndex == 3">
        <Sofas />
      </div>
      <div class="loungechair-container " v-show="tabActiveIndex == 4">
        <LoungeChairs />
      </div> -->
    </div>
  </section>
</template>

<script>
// import ProductsList from '@/components/ProductsList'
// import Furniture from '@/components/Furniture'
// import Lighting from '@/components/Lighting'
// import Sofas from '@/components/Sofas'
// import LoungeChairs from '@/components/LoungeChairs'
export default {
  name: "Products",
  components: {
    // ProductsList,
    // Furniture,
    // Lighting,
    // Sofas,
    // LoungeChairs,
  },
  data() {
    return {
      tabActiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabActiveIndex = val;
    },
  },
};
</script>
<style>
.text {
  color: #3d9421;
}
.btn {
  background-color: #3d9421;
}
</style>
