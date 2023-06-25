import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import {
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BListGroup,
  BListGroupItem,
  BFormSelect,
  BModal,
  BAlert,
} from "bootstrap-vue-next";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("BForm", BForm);
app.component("BFormGroup", BFormGroup);
app.component("BFormInput", BFormInput);
app.component("BButton", BButton);
app.component("BListGroup", BListGroup);
app.component("BListGroupItem", BListGroupItem);
app.component("BFormSelect", BFormSelect);
app.component("BModal", BModal);
app.component("BAlert", BAlert);

app.mount("#app");
