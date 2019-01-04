<template>
    <v-app>
        <app-navbar></app-navbar>
        <app-bread-crumbs :list="breadCrumbList"></app-bread-crumbs>
        <v-fade-transition mode="out-in">
            <router-view/>
        </v-fade-transition>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppNavbar from './components/navigation/AppNavbar'
    import AppFooter from './components/Footer'
    import AppBreadCrumbs from './components/navigation/BreadCrumbs'

    export default {
        name: 'App',
        components: {
            AppNavbar,
            AppFooter,
            AppBreadCrumbs
        },
        data() {
            return {
                breadCrumbList: []
            }
        },
        watch: {
            '$route'() {
                let routeCrumb = this.$route.meta.breadCrumb;
                let breadCrumbList = this.breadCrumbList;

                    if (breadCrumbList.length <= 4) {
                        breadCrumbList.push(routeCrumb);
                    } else {
                        breadCrumbList.shift();
                        breadCrumbList.push(routeCrumb);
                    }
                this.breadCrumbList = breadCrumbList;
            }
        }
    }
</script>

<style>
    #navbar a:hover {
        text-decoration: none;
        color: black;
    }

    #toolbar a:hover {
        text-decoration: none;
    }

    html {
        overflow-y: auto;
    }
</style>
