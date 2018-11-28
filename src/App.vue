<template>
  <div>
  <v-app>
    <app-navbar></app-navbar>
    <router-view/>
    <v-content>
    </v-content>
  </v-app>
  </div>
</template>

<script>
    import AppNavbar from './components/AppNavbar'

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
