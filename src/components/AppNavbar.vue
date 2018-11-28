<template>
    <div>
        <v-navigation-drawer
                v-model="sideNav"
                absolute
                temporary
        >

            <v-list class="pt-0" dense
                    v-for="item in menuItems"
                    :key="item.title">

                <!--Dont have any childs-->
                <span v-if="!item.haveChilds">
                   <v-list-tile @click="TODO"> <!-- TODO -->
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
               </span>

                <!--have childs-->
                <span v-if="item.haveChilds">
                    <v-list-group
                            :prepend-icon = item.icon
                            value="true"
                    >
                        <v-list-tile slot="activator">
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>

                        <v-list-tile
                                v-for="(child, i) in item.childs"
                                :key="i"
                                @click="TODO">  <!-- TODO -->

                              <v-list-tile-content>
                                  <v-list-tile-title>{{ child.title }}</v-list-tile-title>
                              </v-list-tile-content>

                              <v-list-tile-action>
                                  <v-icon> {{ child.icon}}</v-icon>
                              </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
               </span>
            </v-list>

        </v-navigation-drawer>
        <v-toolbar dark color="primary">

            <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      menuItems: [
        {
          icon: "supervisor_account",
          title: "View Meetups",
          haveChilds: false
        },
        {
          icon: "room",
          title: "Organize Meetup",
          haveChilds: true,
          childs: [{ icon: "room", title: "Child 1", haveChilds: false },{ icon: "face", title: "Child 2", haveChilds: false },
          ]
        },
        { icon: "face", title: "Sign up", haveChilds: false },
        { icon: "lock_open", title: "Sign in", haveChilds: false }
      ],
      sideNav: false
    };
  }
};
</script>

<style scoped>
</style>
