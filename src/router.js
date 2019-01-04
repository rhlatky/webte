import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
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
            path: "/~xhlatky/projekt/dist",
            name: "startHome",
            component: Home,
            meta: {
                breadCrumb: {text: 'Domov', disabled: false, href: '/'}
            }
        },{
            path: "/",
            name: "home",
            component: Home,
            meta: {
                breadCrumb: {text: 'Domov', disabled: false, href: '/'}
            }
        },
        {
            path: "/team",
            name: "team",
            component: Team,
            meta: {
                breadCrumb: {text: 'Tím', disabled: false, href: '/team'}
            }
        },
        {
            path: "/team/radoslav",
            name: "Radoslav",
            component: Radoslav,
            meta: {
                breadCrumb: {text: 'Radoslav', disabled: false, href: '/team/radoslav'}
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
            path: "/game/hung",
            name: "GameHung",
            component: GameHung,
            meta: {
                breadCrumb: {text: 'Hra-Hung', disabled: false, href: '/game/hung'}
            }
        },
        {
            path: "/game/dinh",
            name: "GameDinh",
            component: GameDinh,
            meta: {
                breadCrumb: {text: 'Hra-Dinh', disabled: false, href: '/game/dinh'}
            }
        },
        {
            path: "/game/rado",
            name: "GameRado",
            component: GameRado,
            meta: {
                breadCrumb: {text: 'Hra-Rado', disabled: false, href: '/game/rado'}
            }
        },
        {
            path: "/articles",
            name: "mainarticle",
            component: MainArticle,
            meta: {
                breadCrumb: {text: 'Články', disabled: false, href: '/articles'}
            }
        }
    ],
});
