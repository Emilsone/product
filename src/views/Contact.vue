<template>
  <main>
    <TheHeader />
    <section class="contact-bg">
      <h1 class="text-6xl font-bold pt-56 text-center uppercase text-white">
        Contact Us
      </h1>
    </section>
    <div
      class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap pt-48"
    >
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <iframe
          width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs"
            >
              <i class="fa fa-map text-lg" aria-hidden="true"></i> ADDRESS
            </h2>
            <p class="mt-1">No 185 Abak Road Uyo Akwa ibom state</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs"
            >
              <i class="fa fa-envelope text-lg" aria-hidden="true"></i> EMAIL
            </h2>
            <a class="text-indigo-500 leading-relaxed">farmpro@gmail.com</a>
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
            >
              <i class="fa fa-phone text-2xl" aria-hidden="true"></i> PHONE
            </h2>
            <p class="leading-relaxed">+ 234-708-567-4917</p>
          </div>
        </div>
      </div>
      <div
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 class="text-gray-900 text-2xl mb-1 font-bold title-font">
          Get In Touch
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Fill up the form and our team will get back to you within 24 hours
        </p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:ring-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600"
            >Message</label
          >
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-black focus:ring-2 focus:black h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white form border-0 py-2 px-6 focus:outline-none rounded text-lg"
        >
          Send Message
        </button>

         <div class="py-4 px-6">
            <h2
              class="title-font font-semibold text-gray-900 tracking-widest text-xl"
            >
               Opening Hours
            </h2>
            <p class="mt-1">Mon - Fri 9am - 5pm</p>
             <p class="mt-1">Sat - Sun 11am - 4pm</p>
          </div>


        



      </div>
    </div>
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Contact",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style >
.link {
  color: #3d9421 !important;
}
.form {
  background-color: #3d9421;
}
.contact-bg {
  background-image: url("../assets/bg-one.jpg");
  background-size: cover;
  height: 100vh;
  background-blend-mode: hue;
}
</style>
