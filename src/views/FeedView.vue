<template>
  <div class="relative w-full h-full bg-gray-900">
    <NavBar :title="title" />
    <div
      class="bg-gray-900 text-white min-h-screen p-4 overflow-auto no-scrollbar"
    >
      <div class="max-w-md mx-auto space-y-4 mt-10">
        <FeedPost
          v-for="(post, index) in posts"
          :key="index"
          :id="post.id"
          :team="post.team"
          :title="post.title"
          :content="post.content"
          :liked="post.liked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getSortedFeedPosts } from "../services/feedService";
import NavBar from "@/components/NavBar.vue";
import FeedPost from "@/components/FeedPost.vue";

export default {
  name: "FeedView",
  components: {
    NavBar,
    FeedPost,
  },
  data() {
    return {
      title: "News",
      posts: [],
    };
  },
  async created() {
    this.posts = await getSortedFeedPosts();
  },
};
</script>
