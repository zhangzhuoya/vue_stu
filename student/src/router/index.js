import Vue from "vue";
import VueRouter from "vue-router";
import StudentAdd from "@/view/StudentAdd";
import StudentShow from "@/view/StudentShow";

Vue.use(VueRouter);

const routes = [{
    path:'/studentshow',
    component:StudentShow
}, {
    path:'/studentadd',
    component:StudentAdd
}, {
    path:'*',
    redirect:'/studentshow'
}];
const router = new VueRouter({
  mode: "history",
  linkExactActiveClass:"active",
  routes
});
export default router