<template>
  <header
    class="flex justify-between items-center bg-gray-800 rounded-full p-4 h-16"
  >
    <div @click="goToCalendar">
      <i
        data-feather="calendar"
        class="w-6 h-6 text-red-500 flex items-center space-x-2 cursor-pointer transition duration-300 hover:text-red-400"
      ></i>
    </div>
    <div class="font-bold uppercase">{{ title }}</div>

    <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
      <img
        src="@/assets/profile.png"
        alt="User avatar"
        class="w-full h-full object-cover"
      />
    </div>
  </header>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "FeedNavBar",
  props: {
    title: {
      type: String, // Define the prop type
      required: true, // Ensure that the prop is passed
    },
  },
  methods: {
    goToCalendar() {
      this.$router.push("/calendar");
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>
