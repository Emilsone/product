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
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Farm Products </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Our Farmers </a>
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
          <p class="uppercase md:mb-6 font-bold py-0">
            newsletter subscription
          </p>
          
          <!-- component -->
          <div>
            <p class="texl-sm py-2">A 30-second newsletter with new product, discount, service.</p>
            <form class="flex md:flex-nowrap flex-wrap">
              
              <input
                class="md:w-3/4 w-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                placeholder="your@mail.com"
              />
              <button
                class="px-4 md:my-0 my-4 suscribe text-white p-4 uppercase border-t border-b border-r md:mx-auto block"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div class="pt-10">
            <p class="uppercase md:mb-6 font-bold">Connect with us</p>
            <ul class="list-reset mb-6 py-3">
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <i
                  class="fa fa-facebook align-center flex justify-center"
                  aria-hidden="true"
                ></i>
              </li>
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <i
                  class="fa fa-twitter align-center flex justify-center"
                  aria-hidden="true"
                ></i>
              </li>
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <i
                  class="fa fa-instagram align-center flex justify-center"
                  aria-hidden="true"
                ></i>
              </li>
              <li class="mt-2 inline-block mr-3 md:mr-6 w-12 span h-10 py-2">
                <i
                  class="fa fa-linkedin align-center flex justify-center"
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
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
  name: "TheFooter",
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
.suscribe {
  background-color: #3d9421;
  border-color: #3d9421;
}
.span {
  background-color: #3d9421;
  color: white;
  border-radius: 7px;
}
</style>
