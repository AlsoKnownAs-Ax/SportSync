<template>
  <div class="w-full sm:w-[24rem] md:w-[28rem] lg:w-[28rem] xl:w-[28rem]">
    <div class="max-w-md w-full bg-darkBlue rounded-lg shadow-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img :src="getTeamLogo()" alt="" class="w-8 h-8 mr-2" />
          <h1 class="text-xl font-bold">{{ title }}</h1>
        </div>
        <img src="@\assets\soccer.png" alt="Soccer Ball" class="w-6 h-6" />
      </div>
      <div class="bg-gray-800 rounded-lg p-4 mb-4">
        <p class="text-sm">{{ content }}</p>
      </div>
    </div>
    <div class="flex justify-between p-2">
      <button
        @click="toggleLike"
        class="hover:text-white transition text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :fill="isLiked ? 'red' : 'none'"
          viewBox="0 0 24 24"
          :stroke="isLiked ? 'red' : 'currentColor'"
          :class="{ 'animate-like': isLiked }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      <button
        @click="toggleSave"
        class="hover:text-white transition text-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :fill="saved ? 'yellow' : 'none'"
          viewBox="0 0 24 24"
          :stroke="saved ? 'yellow' : 'currentColor'"
          :class="{ 'animate-save': saved }"
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
import preferenceService from "@/services/preferenceService";
import teamLogos from "@/config/teamLogos";

export default {
  name: "FeedPost",
  props: {
    id: {
      type: Number,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    saved: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLiked: this.liked,
      isSaved: this.saved,
    };
  },
  methods: {
    toggleLike: function () {
      this.isLiked = !this.isLiked;

      if (this.isLiked) {
        preferenceService.updatePreference(this.id, this.team);
      } else {
        preferenceService.unlikePost(this.id, this.team);
      }
    },
    toggleSave: function () {
      this.isSaved = !this.isSaved;
    },
    getTeamLogo: function () {
      console.log(this.team);
      console.log(this.team.toLowerCase());
      const formattedTeamName = this.team.toLowerCase().replace(/ /g, "_");

      return teamLogos[formattedTeamName] || teamLogos["default"];
    },
  },
  computed: {
    // Define your computed properties here
  },
  mounted() {
    // Lifecycle hook when the component is mounted
  },
};
</script>

<style scoped>
/* Like animation */
@keyframes like-pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

.animate-like {
  animation: like-pop 0.3s ease-in-out;
}

.animate-save {
  animation: like-pop 0.3s ease-in-out;
}
</style>
