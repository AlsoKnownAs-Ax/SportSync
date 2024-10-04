<template>
  <div class="bg-gray-900 text-white h-screen">
    <FeedNavBar :title="title" />
    <div class="mx-auto my-10 md:p-10">
      <CalendarComponent />
    </div>
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent.vue";
import FeedNavBar from "@/components/NavBar.vue";

export default {
  name: "CalendarView",
  components: {
    CalendarComponent,
    FeedNavBar,
  },
  data() {
    return {
      title: "Match Schedule",
    };
  },
};
</script>
