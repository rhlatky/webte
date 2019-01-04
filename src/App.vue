<template>
    <v-app>
        <app-navbar></app-navbar>
        <v-breadcrumbs :items="breadCrumbList" mode="out-in">
            <v-icon slot="divider">forward</v-icon>
        </v-breadcrumbs>
        <v-fade-transition mode="out-in">
            <router-view/>
        </v-fade-transition>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import AppNavbar from './components/navigation/AppNavbar'
    import AppFooter from './components/Footer'

    export default {
        name: 'App',
        components: {
            AppNavbar,
            AppFooter
        },
        data() {
            return {
                breadCrumbList: []
            }
        },
        watch: {
            '$route'() {
                this.breadCrumbList = this.$route.meta.breadCrumb;
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
