<template>
    <v-app>
        <app-navbar></app-navbar>
        <v-breadcrumbs :items="breadCrumbList" mode="out-in">
            <v-icon slot="divider">forward</v-icon>
        </v-breadcrumbs>
        <v-fade-transition mode="out-in">
            <router-view/>
        </v-fade-transition>
        <v-footer app height="auto">
            <v-card class="flex" flat tile>
                <v-card-actions class="blue lighten-3 justify-center">
                    &copy;2018 — <strong>Vuetify</strong>
                </v-card-actions>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
    import AppNavbar from './components/navigation/AppNavbar'

    export default {
        name: 'App',
        components: {
            AppNavbar,
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
