<template>
  <vue-cal
    class="vuecal--green-blue-theme"
    :selected-date="getCurrentDate()"
    :time-from="0 * 60"
    :time-to="24 * 60"
    :events="events"
    :editable-events="false"
    events-count-on-year-view
    events-on-month-view="short"
    @event-click="onEventClick($event)"
  />
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { EventBus } from "@/eventBus.js";

export default {
  components: {
    VueCal,
  },
  props: {
    // events: {
    //   type: Array,
    //   required: true,
    // },
  },

  setup() {
    // const getComputedEvents = () => {
    //   // return this.events.map((event) => {
    //   //   return {
    //   //     ...event,
    //   //     start: new Date(event.start),
    //   //     end: new Date(event.end),
    //   //   };
    //   // });
    // };
  },
  data() {
    return {
      selectedEvent: null,
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
          start: "2024-10-5 14:30",
          end: "2024-10-5 17:00",
          title: "Match 3",
          class: "!bg-red-500",
        },
        {
          start: "2024-10-5 19:30",
          end: "2024-10-5 23:00",
          title: "Match 2",
          class: "!bg-green-400",
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
        },
      ],
    };
  },
  methods: {
    getCurrentDate: function () {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const dd = String(today.getDate()).padStart(2, "0");

      return `${yyyy}-${mm}-${dd}`;
    },
    // Receives a date string in the format 'yyyy-mm-dd hh:mm' and returns a new date string with 90 minutes added
    addNinetyMinutes: function (dateTimeStr) {
      const dateTime = new Date(dateTimeStr.replace(/-/g, "/"));

      // Add 90 minutes (90 * 60 * 1000 milliseconds) to the Date object
      dateTime.setMinutes(dateTime.getMinutes() + 90);

      // Format the date back to 'yyyy/mm/dd hh:mm'
      const yyyy = dateTime.getFullYear();
      const mm = String(dateTime.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const dd = String(dateTime.getDate()).padStart(2, "0");
      const hh = String(dateTime.getHours()).padStart(2, "0");
      const mins = String(dateTime.getMinutes()).padStart(2, "0");

      return `${yyyy}/${mm}/${dd} ${hh}:${mins}`;
    },
    onEventClick: function (event) {
      this.selectedEvent = event;

      EventBus.emit("event-clicked", event);
    },
  },
};
</script>
<style lang="scss">
.vuecal--green-blue-theme {
  .vuecal__header {
    background-color: #03866c;
    color: white;
  }

  .vuecal__cell {
    background-color: #111827;

    &:hover {
      background-color: #29fcc025;
    }
  }

  .vuecal__weekdays,
  .vuecal__time {
    color: #0971c0;
  }

  .vuecal__event {
    text-align: center;
    background-color: unset;
    color: white;
    font-size: 1rem;

    text-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    }
  }

  .vuecal__event-time {
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
}
</style>
