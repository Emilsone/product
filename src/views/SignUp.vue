
<template>
  <div
    class="flex flex-col items-center justify-center bg-gray-300 h-screen select-none"
  >
    <div
      class="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md border-l-4 border"
    >
      <div class="flex flex-wrap justify-between items-center text-center">
        <div>
          <button
            class="p-3 rounded-lg outline-none text-black shadow w-44 justify-center focus:form hover:form"
          >
            Sign Up with <i class="fa fa-google google" aria-hidden="true"></i>
          </button>
        </div>
        <div>
          <button
            class="p-3 rounded-lg outline-none text-black shadow w-44 justify-center focus:form hover:form"
          >
            Sign Up with <i class="fa fa-facebook" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="mt-10">
        <form method="POST" action="" autocomplete="">
        <div class="relative w-full mb-3">
            <input
              type="name"
              name="name"
              class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Name"
              style="transition: all 0.15s ease 0s"
            />
            <small class="p-2 text-red-500">* Name</small>
          </div>
          <div class="relative w-full mb-3">
            <input
              type="email"
              name="email"
              class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Email"
              style="transition: all 0.15s ease 0s"
            />
            <small class="p-2 text-red-500">* Email</small>
          </div>
          <div class="relative w-full mb-3">
            <input
              type="password"
              name="password"
              class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Password"
              style="transition: all 0.15s ease 0s"
            />
            <small class="p-2 text-red-500">* Password</small>
          </div>
          <div class="text-center mt-6">
            <button
              class="p-3 rounded-lg form outline-none text-white shadow w-32 justify-center focus:form hover:form"
            >
              Sign Up
            </button>
          </div>
          <div class="flex flex-wrap mt-6">
            <div class="w-1/2 text-left">
             
            </div>
            <div class="w-1/2 text-right">
              <a href="#" class="text-blue-900 text-xl"
                ><small> <router-link to="/signin">Have an account?</router-link> </small></a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



    
  

<script>
// import { mapActions } from "vuex";
// import database from "../services/database";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: "",
     
    };
  },
  //   methods: {
  //     async signUp() {
  //       let result = await database.signUp(this.email, this.password);
  //       this.$router.push("/");
  //       if (result.message) {
  //         this.error = result.message;
  //       } else {
  //         console.log("User is created");
  //       }
  //     },
  //   },
};
</script>
<style >
* {
  box-sizing: border-box;
}

.form {
  background-color: #3d9421;
}
</style>