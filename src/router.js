import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import ArticleShow from "./views/ArticleShow.vue";
import ArticleNew from "./views/ArticleNew.vue";
import SubpageShow from "./views/SubpageShow.vue";
import PageShow from "./views/PagesShow.vue";
import UserShow from "./views/UserShow.vue"

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: "/articles/new", name: "articles-new", component: ArticleNew },
    { path: "/articles/:id", name: "articles-show", component: ArticleShow },
    { path: "/subpages/:id", name: "subpages-show", component: SubpageShow },
    { path: "/pages/:id", name: "pages-show", component: PageShow },
    { path: "/users/:id", name: "users-show", component: UserShow }
  ]
});