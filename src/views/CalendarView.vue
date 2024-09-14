<template>
  <div class="bg-gray-900 text-white h-screen">
    <div class="text-white mx-auto space-y-4 sticky top-3 z-50 max-w-md">
      <FeedNavBar
        :title="title"
        :routeLink="routeLink"
        :navbarIcon="navbarIcon"
      />
    </div>
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
      routeLink: "/feed",
      title: "Game Calendar",
      navbarIcon: "arrow-left",
    };
  },
};
</script>
