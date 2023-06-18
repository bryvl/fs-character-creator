<style>
.register-form {
  margin: 2em;
  padding: 64px;
  background-color: #080223;
  border: 1px solid #080223;
  border-radius: 5px;
  color: #fff;
}
.register-form h2 {
  padding: 24px 0px;
}
.register-form input {
  margin: 12px 0px;
}
.btn.register-form--submit {
  margin-top: 2em;
  background-color: #1d2c47;
  border-color: #1d2c47;
}
</style>
<template>
  <b-form class="register-form" @submit.prevent="register">
    <h2>Register</h2>
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
    <b-form-input
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm Password"
      required
    />
    <b-alert variant="danger" v-model="passwordMismatch" dismissible>
      Passwords do not match
    </b-alert>
    <b-button class="register-form--submit" type="submit">Submit</b-button>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      passwordMismatch: false,
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.passwordMismatch = true;
        return;
      }
      this.passwordMismatch = false;
      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          {
            username: this.username,
            password: this.password,
          }
        );

        // If the registration was successful, set the user in the store
        this.$store.dispatch("setUser", response.data.user);
        // Direct user to their dashboard
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
