<template>
  <div class="bg-gray-900 text-white h-screen">
    <div class="max-w-md mx-auto space-y-4">
      <FeedNavBar :title="title" />
    </div>
    <div class="mx-auto my-10 md:p-10">
      <CalendarComponent />
    </div>
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent.vue";
import FeedNavBar from "@/components/FeedNavBar.vue";

export default {
  name: "CalendarView",
  components: {
    CalendarComponent,
    FeedNavBar,
  },
  data() {
    return {
      title: "Game Calendar",
    };
  },
};
</script>
