<template>
  <div class="relative w-full h-full bg-gray-900">
    <div class="text-white mx-auto space-y-4 sticky top-3 z-50 max-w-md">
      <FeedNavBar :title="title" />
    </div>
    <div
      class="bg-gray-900 text-white min-h-screen p-4 overflow-auto no-scrollbar"
    >
      <div class="max-w-md mx-auto space-y-4 mt-10">
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </div>
    </div>
  </div>
</template>

<script>
import FeedNavBar from "@/components/FeedNavBar.vue";
import FeedPost from "@/components/FeedPost.vue";

export default {
  name: "FeedView",
  components: {
    FeedNavBar,
    FeedPost,
  },
  data() {
    return {
      title: "News",
    };
  },
};
</script>
