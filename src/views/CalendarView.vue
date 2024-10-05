<template>
  <div
    class="flex flex-col h-full min-h-screen min-w-screen bg-gray-900 text-white"
  >
    <FeedNavBar :title="title" />
    <div class="mx-auto my-10 md:p-10 w-full min-w-screen">
      <CalendarComponent />
    </div>
    <ColorPicker />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent.vue";
import FeedNavBar from "@/components/NavBar.vue";
import ColorPicker from "@/components/ColorPicker.vue";

export default {
  name: "CalendarView",
  components: {
    CalendarComponent,
    FeedNavBar,
    ColorPicker,
  },
  data() {
    return {
      title: "Match Schedule",
    };
  },
};
</script>
