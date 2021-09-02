<template>
  <!-- <section class="text-gray-700 body-font"> -->
  <div class="container">
    <div class="flex mx-auto flex-wrap mb-20">
      <a
        class="
          tab
          sm:px-6
          py-3
          w-1/2
          sm:w-auto
          justify-center
          sm:justify-start
          border-b-2
          title-font
          font-medium
          inline-flex
          items-center
          leading-none
          hover:text-gray-900
          tracking-wider
        "
        :class="{ active: tabActiveIndex == 0 }"
        @click="changeTab(0)"
      >
        ALL
      </a>
      <a
        class="
          tab
          sm:px-6
          py-3
          w-1/2
          sm:w-auto
          justify-center
          sm:justify-start
          border-b-2
          title-font
          font-medium
          inline-flex
          items-center
          leading-none
          tracking-wider
        "
        :class="{ active: tabActiveIndex == 1 }"
        @click="changeTab(1)"
      >
        FRUIT
      </a>
      <a
        class="
          tab
          sm:px-6
          py-3
          w-1/2
          sm:w-auto
          justify-center
          sm:justify-start
          border-b-2
          title-font
          font-medium
          inline-flex
          items-center
          leading-none
          border-gray-200
          hover:text-gray-900
          tracking-wider
        "
        :class="{ active: tabActiveIndex == 2 }"
        @click="changeTab(2)"
      >
        VEGETABLE
      </a>
      <a
        class="
          tab
          sm:px-6
          py-3
          w-1/2
          sm:w-auto
          justify-center
          sm:justify-start
          border-b-2
          title-font
          font-medium
          inline-flex
          items-center
          leading-none
          border-gray-200
          hover:text-gray-900
          tracking-wider
        "
        :class="{ active: tabActiveIndex == 3 }"
        @click="changeTab(3)"
      >
        DRY
      </a>
      <a
        class="
          tab
          sm:px-6
          py-3
          w-1/2
          sm:w-auto
          justify-center
          sm:justify-start
          border-b-2
          title-font
          font-medium
          inline-flex
          items-center
          leading-none
          border-gray-200
          hover:text-gray-900
          tracking-wider
        "
        :class="{ active: tabActiveIndex == 4 }"
        @click="changeTab(4)"
      >
        JUICE
      </a>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
export default {
  name: "TabIndex",
  data() {
    return {
      tabActiveIndex: 0,
    };
  },
  methods: {
    changeTab(val) {
      this.tabActiveIndex = val;
      this.$emit("tabchange", this.tabActiveIndex);
    },
  },
};
</script>
<style>
.tab {
  height: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  --active-color: rgb(21, 39, 21);
}

.tab.active {
  color: var(--active-color);
  border-bottom: 2px solid var(--active-color);
}
</style>

