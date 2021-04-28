<template>
  <footer class="footer___bg">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <FooterLogo />

        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Features</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">About Us </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Farm Products </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Our Teams </a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline"
                >Blog <span class="text-xs px-2 blog-text">Coming soon</span></a
              >
            </li>
          </ul>
        </div>
        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Further Information</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">FAQ</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Terms and Conditions</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Privacy</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="flex-1 mb-6 py-6">
          <p class="uppercase md:mb-6 font-bold py-2">Suscribe</p>
          <!-- component -->
          <div>
            <form class="m-2 flex">
              <input
                class="p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="your@mail.com"
              />
              <button
                class="px-4 bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
              >
                Subscribe
              </button>
            </form>
          </div>
         
        </div>
      </div>
      <!-- <FooterInfo /> -->
    </div>
  </footer>
</template>

<script>
import FooterLogo from "@/components/FooterLogo";
// import FooterInfo from "@/components/FooterInfo";
export default {
  name: "Footer",
  components: {
    FooterLogo,
    // FooterInfo,
  },
};
</script>	
<style  scoped>
.footer___bg {
  background-color: black;
  color: white;
}
.blog-text {
  color: #3d9421;
}
.btn-sign {
  background-color: #3d9421;
  border-radius: 8px;
}
</style>
