import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Team from "./views/profiles/Team.vue";
import Radoslav from "./views/profiles/RadoslavProfile.vue";
import Dinh from "./views/profiles/DinhProfile.vue";
import Hung from "./views/profiles/HungProfile.vue";
import GameHung from "./views/games/GameHung.vue";
import GameDinh from "./views/games/GameDinh.vue";
import GameRado from "./views/games/GameRado.vue";

import MainArticle from "./views/article/MainArticle.vue"


Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                breadCrumb: {text: 'Home', disabled: false, href: '/'}
            }
        },
        {
            path: "/about",
            name: "about",
            component: About,
            meta: {
                breadCrumb: {text: 'About', disabled: false, href: '/about'}
            }
        },
        {
            path: "/team",
            name: "team",
            component: Team,
            meta: {
                breadCrumb: {text: 'Team', disabled: false, href: '/team'}
            }
        },
        {
            path: "/team/radoslav",
            name: "radoslav",
            component: Radoslav,
            meta: {
                breadCrumb: {text: 'Radoslav', disabled: false, href: '/team/Radoslav'}
            }
        },
        {
            path: "/team/dinh",
            name: "dinh",
            component: Dinh,
            meta: {
                breadCrumb: {text: 'Dinh', disabled: false, href: '/team/dinh'}
            }
        },
        {
            path: "/team/hung",
            name: "hung",
            component: Hung,
            meta: {
                breadCrumb: {text: 'Hung', disabled: false, href: '/team/hung'}
            }
        },
        {
            path: "/game/Hung",
            name: "GameHung",
            component: GameHung,
            meta: {
                breadCrumb: {text: 'Game-Hung', disabled: false, href: '/game/Hung'}
            }
        },
        {
            path: "/game/Dinh",
            name: "GameDinh",
            component: GameDinh,
            meta: {
                breadCrumb: {text: 'Game-Dinh', disabled: false, href: '/game/Dinh'}
            }
        },
        {
            path: "/game/Rado",
            name: "GameRado",
            component: GameRado,
            meta: {
                breadCrumb: {text: 'Game-Rado', disabled: false, href: '/game/Rado'}
            }
        },
        {
            path: "/articles",
            name: "mainarticle",
            component: MainArticle,
            meta: {
                breadCrumb: {text: 'Articles', disabled: false, href: '/articles'}
            }
        }

    ],
    mode: 'history'
});
