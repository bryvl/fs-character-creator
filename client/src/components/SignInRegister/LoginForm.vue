<style>
.login-form {
  margin: 2em;
  padding: 64px;
  background-color: #080223;
  border: 1px solid #080223;
  border-radius: 5px;
  color: #fff;
}
.login-form h2 {
  padding: 24px 0px;
}
.login-form input {
  margin: 12px 0px;
}
.btn.login-form--submit {
  margin-top: 2em;
  background-color: #1d2c47;
  border-color: #1d2c47;
}
</style>
<template>
  <b-form class="login-form" @submit.prevent="login">
    <h2>Log In</h2>
    <b-form-input
      v-model="username"
      type="text"
      placeholder="Username"
      required
    />
    <b-form-input
      v-model="password"
      type="password"
      placeholder="Password"
      required
    />
    <b-button class="login-form--submit" type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:3000/users/login", {
          username: this.username,
          password: this.password,
        });
        // If the registration was successful, set the user in the store
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "Dashboard",
          params: { userId: response.data.user._id },
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
