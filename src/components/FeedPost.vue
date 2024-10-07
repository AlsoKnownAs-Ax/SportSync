<template>
  <div class="w-full sm:w-[24rem] md:w-[28rem] lg:w-[28rem] xl:w-[28rem]">
    <div class="max-w-md w-full bg-darkBlue rounded-lg shadow-lg p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img :src="getTeamLogo()" alt="" class="w-8 mr-2" />
          <h1 class="text-xl font-bold">{{ title }}</h1>
        </div>
        <img
          ref="followIcon"
          @click="followTeam()"
          :src="getFollowingIcon()"
          alt="follow"
          class="w-8 cursor-pointer transition hover:opacity-80"
        />
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
          :fill="isSaved ? 'yellow' : 'none'"
          viewBox="0 0 24 24"
          :stroke="isSaved ? 'yellow' : 'currentColor'"
          :class="{ 'animate-save': isSaved }"
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
import teamLogos from "@/config/teamsData";

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
      isFollowing: false,
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
      const formattedTeamName = this.team.toLowerCase().replace(/ /g, "_");

      return teamLogos[formattedTeamName].logo || teamLogos["default"].logo;
    },
    getFollowingIcon: function () {
      return this.isFollowing
        ? require("@/assets/icons/unfollow.svg")
        : require("@/assets/icons/follow.svg");
    },
    followTeam: function () {
      this.isFollowing = !this.isFollowing;

      if (this.isFollowing) {
        this.$store.commit("followTeam", this.team);
      } else {
        this.$store.commit("unFollowTeam", this.team);
      }

      const followIcon = this.$refs.followIcon;

      const animationClass = this.isFollowing
        ? "animate-follow"
        : "animate-unfollow";
      followIcon.classList.add(animationClass);

      followIcon.addEventListener(
        "animationend",
        () => {
          followIcon.classList.remove(animationClass);
        },
        { once: true } // Ensure this listener only triggers once per animation
      );
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

/* Follow Animation */
@keyframes follow-pop {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes unfollow-pop {
  0% {
    transform: rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg) scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}

.animate-follow {
  animation: follow-pop 0.5s ease-in-out;
}

.animate-unfollow {
  animation: unfollow-pop 0.5s ease-in-out;
}
</style>
