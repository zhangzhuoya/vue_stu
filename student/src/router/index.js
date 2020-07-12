import Vue from "vue";
import VueRouter from "vue-router";
import StudentAdd from "@/view/StudentAdd";
import StudentShow from "@/view/StudentShow";
import StudentEcharts from "@/view/StudentEcharts"
Vue.use(VueRouter);

const routes = [
  {
    path: "/studentshow",
    component: StudentShow,
  },
  {
    path: "/studentadd",
    component: StudentAdd,
  },
  {
    path: "/studentecharts",
    component: StudentEcharts,
  },
  {
    path: "*",
    redirect: "/studentshow",
  },
];
const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes,
});
export default router;
