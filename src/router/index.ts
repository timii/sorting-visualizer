import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: Home },
        {
            path: "/:name",
            component: Detail,
        },
    ],
});

export default router;
