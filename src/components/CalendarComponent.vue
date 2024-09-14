<template>
  <div id="app">
    <vue-cal
      class="vuecal--green-blue-theme"
      :selected-date="'2018-11-19'"
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
          start: "2018-11-19 10:35",
          end: "2018-11-19 11:30",
          title: "Doctor appointment",
        },
        {
          start: "2018-11-19 18:30",
          end: "2018-11-19 19:15",
          title: "Dentist appointment",
        },
        {
          start: "2018-11-20 18:30",
          end: "2018-11-20 20:30",
          title: "Crossfit",
        },
        {
          start: "2018-11-21 11:00",
          end: "2018-11-21 13:00",
          title: "Brunch with Jane",
        },
        {
          start: "2018-11-21 19:30",
          end: "2018-11-21 23:00",
          title: "Swimming lesson",
        },
        {
          start: "2019-09-30 19:30",
          end: "2019-09-30 23:00",
          title: "Swimming lesson",
        },
        {
          start: "2018-11-19 12:00",
          end: "2018-11-19 14:00",
          title: "LUNCH",
          class: "lunch",
          background: true,
        },
        {
          start: "2018-11-20 12:00",
          end: "2018-11-20 14:00",
          title: "LUNCH",
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
