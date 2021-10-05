import Vue from 'vue';
import VueRouter from "vue-router";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"history",
    routes:[{path:"/about",component:About}]

});

export default router;