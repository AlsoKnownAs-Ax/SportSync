<template>
  <vue-cal
    ref="vuecal"
    class="vuecal--green-blue-theme"
    :selected-date="getCurrentDate()"
    :time-from="0 * 60"
    :time-to="24 * 60"
    :events="events"
    :editable-events="false"
    events-count-on-year-view
    events-on-month-view="short"
    show-time-in-cells
    :time-step="30"
    :on-event-click="onEventClick"
  >
    >
  </vue-cal>
</template>

<script>
import vuecal from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { EventBus } from "@/eventBus.js";
import matchSchedule from "@/dummyData/matchSchedule";

export default {
  components: {
    VueCal: vuecal,
  },
  data() {
    return {
      selectedEventId: null,
      events: [
        // {
        //   id: 1,
        //   start: "2024-10-2 12:00",
        //   end: "2024-10-2 14:00",
        //   title: "Match 6",
        //   content: '<i class="bi bi-bell-fill"></i>',
        //   type: "soccer",
        //   class: "soccer",
        //   background: true,
        // },
      ],
    };
  },
  methods: {
    computeEvents: function () {
      const followingTeams = this.$store.getters.getFollowingTeams;

      this.events = matchSchedule.matches
        .filter(
          (team) =>
            followingTeams.includes(team.home_team) ||
            followingTeams.includes(team.away_team)
        )
        .map((match) => {
          return {
            id: match.id,
            start: match.start,
            end: this.addNinetyMinutes(match.start),
            title: `${match.home_team} vs ${match.away_team}`,
            content: `<i class="bi bi-bell-fill"></i>`,
            type: match.type,
            class: match.type,
            background: true,
            home_team: match.home_team,
            away_team: match.away_team,
          };
        });

      return this.events;
    },
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
    onEventClick(event, e) {
      this.selectedEventId = Number(event.id);

      EventBus.emit("event-clicked");
      e.stopPropagation();
    },
  },
  created() {
    EventBus.on("color-selected", (sportClass) => {
      if (!this.selectedEventId) return;

      this.events.find((event) => event.id === this.selectedEventId).class =
        sportClass;

      this.events = [...this.events]; // Trigger a re-render
    });
  },
  mounted() {
    this.computeEvents();
  },
};
</script>
<style lang="scss">
$default: #38b2ac;

$soccer: #48bb78;
$basketball: #f59d19;
$tennis: #d6f526;
$hockey: #2579e7;
$boxing: #9f7aea;
$voleyball: #ff2222;
$golf: #f6ad55;
$gym: #f687b3;
$swimming: #63b3ed;

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
    background-color: $default;
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

    &.soccer {
      background-color: $soccer;
    }
    &.basketball {
      background-color: $basketball;
    }
    &.tennis {
      background-color: $tennis;
    }
    &.hockey {
      background-color: $hockey;
    }
    &.boxing {
      background-color: $boxing;
    }
    &.default {
      background-color: $default;
    }
    &.voleyball {
      background-color: $voleyball;
    }
    &.golf {
      background-color: $golf;
    }
    &.gym {
      background-color: $gym;
    }
    &.swimming {
      background-color: $swimming;
    }

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
