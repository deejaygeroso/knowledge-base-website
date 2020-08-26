import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
});
