import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue-next";
import {
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue-next";

const app = createApp(App);
app.use(store);
// app.use(BootstrapVue);
// app.use(IconsPlugin);

app.component("BForm", BForm);
app.component("BFormGroup", BFormGroup);
app.component("BFormInput", BFormInput);
app.component("BButton", BButton);
app.component("BListGroup", BListGroup);
app.component("BListGroupItem", BListGroupItem);

app.mount("#app");
