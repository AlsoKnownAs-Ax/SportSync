<template>
  <div
    class="text-white flex justify-between items-center bg-gray-800 p-4 h-16 sticky z-50 top-0"
  >
    <img
      @click="Navigate('/feed')"
      src="@/assets/logo.png"
      alt=""
      class="flex w-16 h-16 cursor-pointer transition duration-200 hover:opacity-70 items-center"
    />

    <!-- Title Page -->
    <div
      class="font-bold uppercase absolute left-1/2 transform -translate-x-1/2"
    >
      {{ title }}
    </div>

    <!-- Nav Bar container -->
    <nav class="p-4">
      <div class="container mx-auto flex justify-between items-center">
        <ul class="flex space-x-8">
          <li>
            <a
              @click="Navigate('/feed')"
              class="text-white hover:text-gray-300 cursor-pointer"
              >Home</a
            >
          </li>
          <li>
            <a
              @click="Navigate('/calendar')"
              class="text-white hover:text-gray-300 cursor-pointer"
              >Calendar</a
            >
          </li>
          <li>
            <a
              @click="Navigate('/players')"
              class="text-white hover:text-gray-300 cursor-pointer"
              >Players</a
            >
          </li>
        </ul>

        <div
          class="w-10 h-10 rounded-full overflow-hidden ml-10 cursor-pointer transition duration-200 hover:scale-105"
        >
          <img
            src="@/assets/profile.png"
            alt="User avatar"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import feather from "feather-icons";

export default {
  name: "FeedNavBar",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    Navigate(routeLink) {
      if (routeLink) {
        this.$router.push(routeLink);
      } else {
        console.error("No route link provided.");
      }
    },
  },
  mounted() {
    // this.$refs.icon.setAttribute("data-feather", this.navbarIcon);
    // feather.replace();
  },
};
</script>
