import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomeRoute",
    component: Home
  },
  {
    path: "/about",
    name: "AboutRoute",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/repo/:id",
    name: "RepoRoute",
    // route level code-splitting
    // this generates a separate chunk (forks.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Repository" */ "../components/Repository.vue"
      ),
    props: route => {
      console.log(route);
      return {
        ...route.params
      };
    },
    children: [
      {
        path: "/repo/:id/forks",
        name: "ForksRoute",
        // route level code-splitting
        // this generates a separate chunk (forks.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "forks" */ "../views/ForksView.vue"),
        props: route => ({
          id: route.params.id
        })
      },
      {
        path: "/repo/:id/issues",
        name: "IssuesRoute",
        // route level code-splitting
        // this generates a separate chunk (issues.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "issues" */ "../views/IssuesView.vue"),
        props: route => ({
          id: route.params.id
        })
      },
      {
        path: "/repo/:id/pull-requests",
        name: "PullRequestsRoute",
        // route level code-splitting
        // this generates a separate chunk (---.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "pull-requests" */ "../views/PullRequestsView.vue"
          ),
        props: route => ({
          id: route.params.id
        })
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "FourOhFoursRoute",
    // route level code-splitting
    // this generates a separate chunk (---.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pull-requests" */ "../views/404sView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
