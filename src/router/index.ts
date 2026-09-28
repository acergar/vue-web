import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Batman from "../pages/batman/Batman.vue";
import Simpsons from "../pages/simpsons/Simpsons.vue";
import Reply from "../pages/reply/Reply.vue";

export const router = createRouter ({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/batman',
          name: 'batman',
          component: Batman
        },
        {
          path: '/simpsons',
          name: 'simpsons',
          component: Simpsons
        },
        {
          path: '/indecision',
          name: 'indecision',
          component: Reply
        },
        {
          path: '/:pathMach(.*)*',
          redirect: '/'
        }
    ]
})