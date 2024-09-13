<template>
  <div class="bg-gray-900 text-white min-h-screen p-4">
    <div class="container mx-auto space-y-4">
      <CalendarComponent />
    </div>
  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent.vue";

export default {
  name: "CalendarView",
  components: {
    CalendarComponent,
  },
};
</script>
