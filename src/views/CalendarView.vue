<template>
  <div
    class="flex flex-col h-full min-h-screen min-w-screen bg-gray-900 text-white"
  >
    <FeedNavBar :title="title" />
    <div class="flex justify-end mt-8">
      <i
        @click="showCalendarModal"
        class="bi bi-stars text-3xl cursor-pointer hover:opacity-70 duration-100 ease-in-out"
      ></i>
      <CalendarModal />
    </div>
    <div class="mx-auto md:p-10 w-full min-w-screen">
      <CalendarComponent />
    </div>
    <ColorPicker />
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent.vue";
import FeedNavBar from "@/components/NavBar.vue";
import ColorPicker from "@/components/ColorPicker.vue";
import CalendarModal from "@/components/CalendarModal.vue";

export default {
  name: "CalendarView",
  components: {
    CalendarComponent,
    FeedNavBar,
    ColorPicker,
    CalendarModal,
  },
  methods: {
    showCalendarModal() {
      this.$store.commit("toggleCalendarModal", true);
    },
  },
  data() {
    return {
      title: "Match Schedule",
    };
  },
};
</script>
