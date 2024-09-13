<template>
  <div>
    <vue-cal
      :events="events"
      :time-from="8"
      :time-to="18"
      default-view="week"
    />
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  name: "CalendarView",
  components: {
    VueCal,
  },
  data() {
    return {
      events: [
        {
          start: "2024-09-15 09:00",
          end: "2024-09-15 11:00",
          title: "Morning Meeting",
        },
        {
          start: "2024-09-16 14:00",
          end: "2024-09-16 15:00",
          title: "Doctor Appointment",
        },
      ],
    };
  },
};
</script>
