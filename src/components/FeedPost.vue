<template>
  <div class="w-full sm:w-[24rem] md:w-[28rem] lg:w-[28rem] xl:w-[28rem]">
    <div class="max-w-md w-full bg-darkBlue rounded-lg shadow-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
            alt="Barcelona Logo"
            class="w-8 h-8 mr-2"
          />
          <h1 class="text-xl font-bold">Transfer</h1>
        </div>
        <img
          src="https://images.unsplash.com/photo-1614632537239-e910a09f3f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Soccer Ball"
          class="w-6 h-6"
        />
      </div>
      <div class="bg-gray-800 rounded-lg p-4 mb-4">
        <p class="text-sm">Player X has started their journey at [ Club ]</p>
      </div>
    </div>
    <div class="flex justify-between p-2">
      <button class="text-gray-400 hover:text-white transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <button class="text-gray-400 hover:text-white transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedPost",
  props: {
    // Define your props here
  },
  data() {
    return {
      // Define your component data here
    };
  },
  methods: {
    // Define your component methods here
  },
  computed: {
    // Define your computed properties here
  },
  mounted() {
    // Lifecycle hook when the component is mounted
  },
};
</script>
