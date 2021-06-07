<template>
  <main>
    <TheHeader />

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <p class="text-lg paragraph-font mb-6 text-center text">
          ~~ Our Farmers ~~
        </p>
        <p
          class="text-3xl font-bold title-font text-black mb-12 text-center text"
        >
          Our Amazing Farmers
        </p>
        <div class="flex flex-wrap justify-around md:justify-center">
          <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-one.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
                Sandra Joe
              </h1>
              <p class="leading-relaxed">
             We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">Vegetable Team</p>
            </div>
          </div>
          <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4 md:mx-auto">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-two.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
                Kelvin Michael
              </h1>
              <p class="leading-relaxed">
                We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">Fruit Team</p>
            </div>
          </div>
          <div class="lg:w-1/3 w-5/6 lg:mb-0 p-4 md:mx-auto">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-three.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
                Helena Paul
              </h1>
              <p class="leading-relaxed">
              We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">Vegetable Team</p>
            </div>
          </div>
        </div>
         <div class="flex flex-wrap justify-around md:justify-center xl:pt-12">
          <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-four.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
               Julian Smith
              </h1>
              <p class="leading-relaxed">
              We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">Juice Team</p>
            </div>
          </div>
          <div class="lg:w-1/3 w-5/6 lg:mb-0 mb-6 p-4 md:mx-auto">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-five.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
              Mike Lawson  
              </h1>
              <p class="leading-relaxed">
                We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">Juice Team</p>
            </div>
          </div>
          <div class="lg:w-1/3 w-5/6 lg:mb-0 p-4 md:mx-auto">
            <div class="h-full text-center">
              <img
                alt="farmers"
                class="w-40 h-40 mb-8 object-cover object-center inline-block rounded-full"
                src="../assets/farmers/farmer-six.jpg"
              />
              <h1
                class="text-gray-900 font-bold title-font tracking-wider text-xl"
              >
                Tony Lim
              </h1>
              <p class="leading-relaxed">
              We beleive that access to healthy fresh food is a human right so we get our products washed ready
              </p>
              <span
                class="inline-block h-1 w-10 rounded bg mt-6 mb-4"
              ></span>

              <p class="text-gray-500">DryProducts Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Farmers",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style>
.bg{
    background-color: #3d9421;
}
</style>