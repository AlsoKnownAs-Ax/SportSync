<template>
  <div class="bg-gray-900 text-white min-h-screen p-4">
    <div class="max-w-md mx-auto space-y-4">
      <FeedNavBar :title="title" />
    </div>
  </div>
</template>

<script>
import FeedNavBar from "@/components/FeedNavBar.vue";

export default {
  name: "FeedView",
  components: {
    FeedNavBar,
  },
  data() {
    return {
      title: "News",
    };
  },
};
</script>
