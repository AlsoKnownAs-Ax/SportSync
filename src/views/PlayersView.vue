<template>
  <div class="bg-gray-900 text-white h-screen">
    <NavBar :title="title" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "PlayersView",
  components: {
    NavBar,
  },
  data() {
    return {
      title: "Players Statistics",
      cards: [],
    };
  },
};
</script>
