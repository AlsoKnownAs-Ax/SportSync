<template>
  <div
    v-if="show"
    class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-10 flex justify-center items-center z-50"
  >
    <div
      class="bg-dark-200 p-4 rounded-lg shadow-lg w-96 relative flex items-center flex-col"
    >
      <div class="w-full flex justify-center">
        <img class="w-24" src="@/assets/logo.png" alt="" />
      </div>
      <div
        class="font-semibold w-80 text-wrap text-white text-lg text-center flex items-center justify-center"
      >
        What days during the week are you free ?
      </div>
      <form @submit.prevent="submitForm">
        <div
          class="space-y-2 w-80 mt-8 text-white flex justify-center flex-col"
        >
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="monday"
              v-model="selectedFreeDays"
            />
            <span>Monday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="tuesday"
              v-model="selectedFreeDays"
            />
            <span>Tuesday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="wednesday"
              v-model="selectedFreeDays"
            />
            <span>Wednesday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="thursday"
              v-model="selectedFreeDays"
            />
            <span>Thursday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="friday"
              v-model="selectedFreeDays"
            />
            <span>Friday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="saturday"
              v-model="selectedFreeDays"
            />
            <span>Saturday</span>
          </label>
          <label class="flex items-center space-x-3">
            <input
              type="checkbox"
              class="form-checkbox text-blue-500 animated-checkbox"
              name="day"
              value="sunday"
              v-model="selectedFreeDays"
            />
            <span>Sunday</span>
          </label>
        </div>
        <button
          class="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-100"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFreeDays: [],
    };
  },
  computed: {
    show() {
      console.log(this.$store.getters.isModalVisible);

      return this.$store.getters.isModalVisible;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("togglePreferencesModal", false);
    },
    submitForm() {
      // alert(`You selected: ${this.$store.getters.getUserFreeDays.join(", ")}`);
      this.$store.commit("setFreeDays", this.selectedFreeDays);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
@keyframes checkbox-mark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animated-checkbox:checked {
  animation: checkbox-mark 0.2s ease-in-out;
}
</style>
