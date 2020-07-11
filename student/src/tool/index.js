import Vue from "vue";
import App from "./index.vue";
const Toast = Vue.extend(App);
export default function({ msg, type }) {
  const vm = new Toast({
    el: document.createElement("div"),
    data() {
      return {
        msg,
        type,
        life: true,
        animmate: "fade-in",
      };
    },
    created() {
      console.log("a");
      console.log(this.msg, this.type, this.animmate);
    },
  });
  document.body.appendChild(vm.$el);
  setTimeout(() => {
    vm.animate = "fade-out";
  }, 1200);
  setTimeout(() => {
    vm.life = false;
  }, 2000);
}
