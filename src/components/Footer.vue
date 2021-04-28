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
              <a href="#" class="no-underline"
                >Farm Products
                </a
              >
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline"
                >Our Teams
               </a
              >
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

        <div class="flex-1  mb-6  py-6">
          <p class="uppercase md:mb-6 font-bold py-2">Suscribe</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Managie@gmail.com</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Contact Form</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">+2347085674917</a>
            </li>
          </ul>
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
  color: #66d4d7;
}
</style>
