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
        class="color-circle bg-green-300"
        @click="selectColor('bg-green-300', $event)"
      ></div>
      <div
        class="color-circle bg-pink-300"
        @click="selectColor('bg-pink-300', $event)"
      ></div>
      <div
        class="color-circle bg-blue-300"
        @click="selectColor('bg-blue-300', $event)"
      ></div>
      <div
        class="color-circle bg-yellow-300"
        @click="selectColor('bg-yellow-300', $event)"
      ></div>
      <div
        class="color-circle bg-blue-500"
        @click="selectColor('bg-blue-500', $event)"
      ></div>
      <div
        class="color-circle bg-teal-400"
        @click="selectColor('bg-teal-400', $event)"
      ></div>
      <div
        class="color-circle bg-red-300"
        @click="selectColor('bg-red-300', $event)"
      ></div>
      <div
        class="color-circle bg-red-500"
        @click="selectColor('bg-red-500', $event)"
      ></div>
      <div
        class="color-circle bg-red-400"
        @click="selectColor('bg-red-400', $event)"
      ></div>
    </div>
    <div class="text-center">
      <button
        id="saveBtn"
        class="bg-blue-300 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-400 transition-colors"
      >
        Save
      </button>
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
      event: null,
      show: false,
      rendered: false,
      selectedColor: null,
      activeElement: null,
    };
  },
  created() {
    const bus = EventBus;

    bus.on("event-clicked", (event) => {
      this.rendered = true;
      this.$nextTick(() => {
        this.toggleShow(true);
      });
      this.event = event;
    });
  },
  methods: {
    toggleShow(show) {
      if (this.show == show) return;
      const colorPicker = this.$refs.colorPicker;

      if (!colorPicker) return;

      this.show = show;

      if (this.show) {
        colorPicker.classList.remove("slide-down");
        colorPicker.classList.add("slide-up");
      } else {
        colorPicker.classList.remove("slide-up");
        colorPicker.classList.add("slide-down");
      }
    },
    selectColor(color, event) {
      // Remove 'selected' class from the previously selected element
      if (this.activeElement) {
        this.activeElement.classList.remove("selected");
      }

      this.selectedColor = color;

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
  width: 2.0833vw;
  height: 2.0833vw;
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
