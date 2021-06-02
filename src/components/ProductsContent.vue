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

      <ProductList @tabchange="changeTab($event)" />
      <div class="product____container" v-show="tabActiveIndex == 0">
        <div class="flex flex-wrap -m-4">
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-56 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/carrot.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Fruit
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Kiwi</h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/ginger.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Fruit
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Egg Plant
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/passion.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Fruit
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
               Passion Fruit
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/lettuce.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Vegetable
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Tomatoe
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>

          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/brocolli.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Vegetable
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Broccoli
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/tomatoe.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Fruit
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Banana
              </h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/pear.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Fruit
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Water Melon
              </h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div
            class="border-2 border-gray-200 border-opacity-60 lg:w-1/4 md:w-1/2 p-4 w-full"
          >
            <a class="block relative h-48 overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="../assets/all/orange.jpg"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                Vegetable
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                Melon
              </h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      <div class="flex justify-center align-center lg:mt-12">
        <a href="#" class="btn p-4 px-6 text-white">View More Products</a>
      </div>
      </div>
      <div class="fruit-container" v-show="tabActiveIndex == 1">
        <FruitPage />
      </div>
      <div class="vegetable-container" v-show="tabActiveIndex == 2">
        <VegetablePage />
      </div>
      <div class="products-container" v-show="tabActiveIndex == 3">
        <DryProducts />
      </div>
      <div class="juice-container" v-show="tabActiveIndex == 4">
        <Juice />
      </div>
    </div>
  </section>
</template>

<script>
import ProductList from "@/components/ProductList";
import FruitPage from "@/components/FruitPage";
import VegetablePage from "@/components/VegetablePage";
import DryProducts from "@/components/DryProducts";
import Juice from "@/components/Juice";
export default {
  name: "ProductsContent",
  components: {
    ProductList,
    FruitPage,
    VegetablePage,
    DryProducts,
    Juice,
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
