import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AlgorithmDetail from "../components/AlgorithmDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: Home },
        {
            path: "/:name",
            component: AlgorithmDetail,
        },
    ],
});

export default router;
