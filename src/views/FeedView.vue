<template>
  <div class="relative w-full h-full bg-gray-900">
    <FeedNavBar :title="title" />
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
import FeedNavBar from "@/components/NavBar.vue";
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
      posts: [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc.",
        },
      ],
    };
  },
};
</script>
