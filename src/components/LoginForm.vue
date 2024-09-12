<template>
  <div class="flex items-center justify-center min-h-screen background">
    <div class="login-container max-w-md p-8 rounded-3xl shadow-lg w-full">
      <div class="flex justify-center mb-8">
        <img src="@/assets/logo.png" alt="SportsSync Logo" class="w-32 h-32" />
      </div>

      <form class="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Username"
            class="w-full px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            class="w-full px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition duration-300"
            @click="submitForm"
          >
            Log In
          </button>
        </div>
      </form>

      <div class="mt-4 text-center">
        <a href="#" class="text-blue-400 hover:underline">Sign up</a>
      </div>

      <div class="mt-4 text-center">
        <a href="#" class="text-gray-400 hover:underline">Forgot password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log("Form submitted");
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #242424;
  color: #ffffff;
}
.login-container {
  background-color: #1e1e1e;
}
input {
  background-color: transparent;
  border-bottom: 1px solid #ffffff;
}
input::placeholder {
  color: #a0a0a0;
}
</style>
