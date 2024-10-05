<template>
  <div class="min-h-screen min-w-screen bg-gray-900 text-white">
    <NavBar :title="title" />
    <div
      class="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-2 mt-12 px-4"
    >
      <PlayerCard
        v-for="(player, index) in players"
        :key="index"
        :player="player"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PlayerCard from "@/components/PlayerCard.vue";

export default {
  name: "PlayersView",
  components: {
    NavBar,
    PlayerCard,
  },
  data() {
    return {
      title: "Players Statistics",
      players: [
        {
          name: "Lionel Messi",
          stats: [
            { name: "STR", value: 90 },
            { name: "DRI", value: 95 },
            { name: "PAC", value: 85 },
            { name: "DEF", value: 40 },
            { name: "SHO", value: 90 },
            { name: "PAS", value: 85 },
          ],
          favoriteDribbling: "Body Feints",
        },
        {
          name: "Lionel Messi",
          stats: [
            { name: "STR", value: 90 },
            { name: "DRI", value: 95 },
            { name: "PAC", value: 85 },
            { name: "DEF", value: 40 },
            { name: "SHO", value: 90 },
            { name: "PAS", value: 85 },
          ],
          favoriteDribbling: "Body Feints",
        },
        {
          name: "Lamine Yamal",
          stats: [
            { name: "STR", value: 90 },
            { name: "DRI", value: 95 },
            { name: "PAC", value: 85 },
            { name: "DEF", value: 40 },
            { name: "SHO", value: 90 },
            { name: "PAS", value: 85 },
          ],
          favoriteDribbling: "Stepover",
        },
        {
          name: "Lamine Yamal",
          stats: [
            { name: "STR", value: 90 },
            { name: "DRI", value: 95 },
            { name: "PAC", value: 85 },
            { name: "DEF", value: 40 },
            { name: "SHO", value: 90 },
            { name: "PAS", value: 85 },
          ],
          favoriteDribbling: "Stepover",
        },
      ],
    };
  },
};
</script>
