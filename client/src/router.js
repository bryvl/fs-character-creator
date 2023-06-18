import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HomeScreen.vue";
import Dashboard from "./components/UserDashboard/DashboardHome.vue";
import LoginForm from "./components/SignInRegister/LoginForm.vue";
import RegisterForm from "./components/SignInRegister/RegisterForm.vue";
import CharacterSelect from "./components/CharacterSelect.vue";
import CharacterCreator from "./components/CharacterCreator.vue";
import CreateName from "./components/SelectName.vue";
import CreateRace from "./components/SelectRace.vue";
import CreateClass from "./components/SelectClass.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterForm,
  },
  {
    path: "/dashboard/:userId",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/create/:userId",
    name: "CharacterCreator",
    component: CharacterCreator,
    children: [
      { path: "name", component: CreateName },
      { path: "race", component: CreateRace },
      { path: "class", component: CreateClass },
    ],
  },
  {
    path: "/character-select/:userId",
    name: "CharacterSelect",
    component: CharacterSelect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
