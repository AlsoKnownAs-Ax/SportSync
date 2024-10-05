<template>
  <div class="px-4">
    <div
      class="bg-dark-200 rounded-3xl p-6 mx-auto shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <div class="flex items-center space-x-6">
        <img
          :src="getPicturePathFromPlayerName()"
          alt="Player"
          class="w-24 h-24 rounded-full object-cover"
        />
        <h1 class="text-2xl font-bold">{{ player.name }}</h1>
      </div>
      <div class="mt-6 grid grid-cols-6 gap-4 text-center">
        <div v-for="(stat, index) in player.stats" :key="index">
          <p class="font-semibold">{{ stat.name }}</p>
          <p class="text-xl">{{ stat.value }}</p>
        </div>
      </div>
      <div class="mt-6">
        <p class="font-semibold">
          Favorite dribbling:
          <span class="text-blue-400">{{ player.favoriteDribbling }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPicturePathFromPlayerName() {
      const formattedName = this.player.name.toLowerCase().replace(" ", "-");

      return require(`@/assets/players/${formattedName}.png`);
    },
  },
};
</script>
