<template>
  <div>
  <v-app>
    <app-navbar></app-navbar>
    <v-breadcrumbs :items="breadCrumbList" mode="out-in">
      <v-icon slot="divider">forward</v-icon>
    </v-breadcrumbs>
    <v-fade-transition mode="out-in">
    <router-view/>
    </v-fade-transition>
    <v-content>
    </v-content>
  </v-app>
  </div>
</template>

<script>
    import AppNavbar from './components/navigation/AppNavbar'
export default {
  name: 'App',
  components: {
      AppNavbar,
  },
  data () {
    return {
      breadCrumbList:[]
    }
  },
    watch:{
      '$route' (){
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
</style>
