<template>
  <div
    ref="colorPicker"
    v-if="rendered"
    class="bg-darkcard p-6 rounded-t-xl shadow-lg w-full max-w-2xl fixed bottom-0 left-0 right-0 m-auto z-50 drop-shadow-lg"
  >
    <div class="flex w-full items-center justify-end right-5 top-2 absolute">
      <i
        @click="toggleShow(false)"
        class="bi bi-arrow-down-circle text-2xl cursor-pointer transition duration-100 hover:opacity-70"
      ></i>
    </div>
    <h2 class="text-xl font-semibold mb-4">Event Color Picker</h2>
    <div class="flex flex-wrap gap-4 justify-center mb-6">
      <div
        class="color-circle w-8 h-8"
        style="background-color: #48bb78"
        @click="selectColor('soccer', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #4299e1"
        @click="selectColor('basketball', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #e53e3e"
        @click="selectColor('tennis', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #ed8936"
        @click="selectColor('hockey', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #9f7aea"
        @click="selectColor('boxing', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #38b2ac"
        @click="selectColor('default', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #f6e05e"
        @click="selectColor('voleyball', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #f6ad55"
        @click="selectColor('golf', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #f687b3"
        @click="selectColor('gym', $event)"
      ></div>
      <div
        class="color-circle w-8 h-8"
        style="background-color: #63b3ed"
        @click="selectColor('swimming', $event)"
      ></div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/eventBus.js";

export default {
  name: "ColorPicker",
  props: {},
  data() {
    return {
      show: false,
      rendered: false,
      selectedColor: null,
      activeElement: null,
    };
  },
  created() {
    const bus = EventBus;

    bus.on("event-clicked", () => {
      this.rendered = true;
      this.$nextTick(() => {
        this.toggleShow(true);
      });
    });
  },
  methods: {
    toggleShow(show) {
      try {
        if (!this.rendered || !this.$refs.colorPicker) return;
        if (this.show == show) return;

        const colorPicker = this.$refs.colorPicker;

        this.show = show;

        if (this.show) {
          colorPicker.classList.remove("slide-down");
          colorPicker.classList.add("slide-up");
        } else {
          colorPicker.classList.remove("slide-up");
          colorPicker.classList.add("slide-down");
        }
      } catch (error) {
        console.error(error);
      }
    },
    selectColor(sportClass, event) {
      // Remove 'selected' class from the previously selected element
      if (this.activeElement) {
        this.activeElement.classList.remove("selected");
      }

      EventBus.emit("color-selected", sportClass);

      const clickedElement = event.target;
      clickedElement.classList.add("selected");

      this.activeElement = clickedElement;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.color-circle {
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}
.color-circle:hover {
  transform: scale(1.1);
}
.color-circle.selected {
  box-shadow: 0 0 0 0.1563vw white;
}

@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

.slide-up {
  animation: slide-up 0.7s ease-out forwards;
}

.slide-down {
  animation: slide-down 0.7s ease-out forwards;
}
</style>
