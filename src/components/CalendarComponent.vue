<template>
  <div id="app">
    <vue-cal
      class="vuecal--green-blue-theme"
      :selected-date="'2024-9-9'"
      :time-from="10 * 60"
      :events="events"
      :editable-events="false"
      events-count-on-year-view
      :events-on-month-view="'short'"
    />
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: {
    VueCal,
  },
  data() {
    return {
      events: [
        {
          start: "2024-9-9 10:30",
          end: "2024-9-9 11:30",
          title: "Match",
        },
        {
          start: "2024-9-12 15:35",
          end: "2024-9-12 18:30",
          title: "Match",
        },
        {
          start: "2024-9-15 19:30",
          end: "2024-9-15 23:00",
          title: "Match",
        },
        {
          start: "2019-09-14 19:30",
          end: "2019-09-14 23:00",
          title: "Match",
        },
        {
          start: "2024-9-9 12:00",
          end: "2024-9-9 14:00",
          title: "Match",
          class: "lunch",
          background: true,
        },
      ],
    };
  },
};
</script>

<style>
.vuecal--green-blue-theme .vuecal__header {
  background-color: #03866c;
  color: white;
}

.vuecal--green-blue-theme .vuecal__cell {
  background-color: #111827;
}

.vuecal--green-blue-theme .vuecal__cell:hover {
  background-color: #55efc325;
}

.vuecal--green-blue-theme .vuecal__weekdays,
.vuecal__time {
  color: #0971c0;
}

.vuecal--green-blue-theme .vuecal__event {
  text-align: center;
  background-color: #00629b;
  color: white;
  font-size: 1rem;

  text-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  flex-direction: column;
}

.vuecal--green-blue-theme .vuecal__event-time {
  /* display: none; */
  font-size: 0.7rem;
}

/* Small Devices */
@media (max-width: 640px) {
  .vuecal--green-blue-theme .vuecal__event {
    font-size: 0.7rem;
  }
  .vuecal--green-blue-theme .vuecal__event-time {
    /* display: none; */
    font-size: 0.5rem;
  }
}
</style>
