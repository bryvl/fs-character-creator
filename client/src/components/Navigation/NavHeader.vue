<style>
.navbar .navbar-nav {
  flex-direction: row;
  align-items: center;
}
.navbar-nav .nav-link {
  margin: 12px;
}
</style>
<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">Dark Seas</router-link>
      <div class="navbar-nav">
        <template v-if="!user">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/register" class="nav-link">Sign Up</router-link>
        </template>
        <template v-else>
          <button class="btn btn-link nav-link" @click="navigateToDashboard">
            {{ user.username }}
          </button>
          <button class="btn btn-link nav-link" @click="logout">Logout</button>
        </template>
      </div>
    </div>
  </nav>
</template>
<script>
// import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  methods: {
    ...mapActions(["setUser"]),
    logout() {
      this.setUser(null);
      // Perform any additional logout actions, such as clearing local storage or redirecting to the login page.
      this.$router.push("/");
    },
    navigateToDashboard() {
      const userId = this.$route.params.userId;
      console.log(userId);
      this.$router.push({
        name: "Dashboard",
        params: { userId },
      });
    },
  },
};
</script>
