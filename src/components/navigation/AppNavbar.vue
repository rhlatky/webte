<template>
    <div>
        <v-navigation-drawer
                v-model="sideNav"
                absolute
                temporary
        >
            <v-list id="navbar">
                <template v-for="(item, i) in menuItems">
                    <v-list-tile v-if="!item.haveChilds"
                                 :key="i"
                    router
                    :to="item.link"
                    >
                        <v-list-tile-action>
                            <v-icon left >{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    </v-list-tile>
                    <template v-if="item.haveChilds">
                        <v-list-group :key="i"
                                      prepend-icon="account_circle"
                                      :value="false"
                        >
                            <v-list-tile slot="activator">
                                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                            </v-list-tile>

                            <template v-for="children in item.children">

                                <v-list-tile
                                        class="indent-second-level"
                                        :key="children.name"
                                        v-if="!children.haveChilds"
                                router
                                :to="children.link">
                                    <v-list-tile-title>{{children.name}}</v-list-tile-title>
                                </v-list-tile>

                                <v-list-group v-else :key="children.name"
                                              no-action
                                              sub-group
                                              :value="false"
                                >
                                    <v-list-tile slot="activator">
                                        <v-list-tile-title>{{children.name}}</v-list-tile-title>
                                    </v-list-tile>

                                    <v-list-tile
                                            v-for="(sChild, i) in children.children"
                                            :key="i"
                                            router
                                            :to="sChild.link"
                                    >
                                        <v-list-tile-action>
                                        <v-icon>{{sChild.icon}}</v-icon>
                                        </v-list-tile-action>
                                        <v-list-tile-title class="indent-third-level">
                                            {{sChild.name}}
                                        </v-list-tile-title>
                                    </v-list-tile>
                                </v-list-group>
                            </template>
                        </v-list-group>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar dark class="primary">

            <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>

            <v-toolbar-title class="white--text">
            <router-link to="/" tag="span" style="cursor: pointer">WebTe project</router-link>
            </v-toolbar-title>

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
                menuItems: [{icon: "home", name: "Home", link:'/',haveChilds: false},
                            {icon: "chrome_reader_mode", name: "Articles", link:'/articles',haveChilds: false},
                    {
                        icon: "room", name: "Organize Meetup",haveChilds: true, children: [{
                            icon: "room",
                            name: "Child 1",haveChilds: true,
                            children: [{icon: "face", name: "Child 1.2", link:'/child12',haveChilds: false}]
                        },
                            {icon: "face", name: "Child 2", link:'/child2',haveChilds: false}
                        ]
                    },
                    {icon: "face", name: "Sign up", link:'/signup',haveChilds: false},
                    {
                        icon: "lock_open", name: "About us",haveChilds: true, children: [
                            {icon: "face", name: "Team", link:'/team',haveChilds: false},
                            {
                                icon: "face",
                                name: "Profiles",haveChilds: true,
                                children: [{icon: "face", name: "Radoslav Hlatký", link:'/team/radoslav',haveChilds: false},
                                    {icon: "face", name: "Dinh Nguyen Tien", link:'/team/dinh',haveChilds: false},
                                    {icon: "face", name: "Hung Tran Minh", link:'/team/hung',haveChilds: false}]
                            }
                        ]
                    }
                ],
                sideNav: false,
            };
        }
    };
</script>

<style scoped>
    .indent-second-level {
        margin-left: 58px;
    }

    .indent-third-level {
        margin-left: 20px;
    }
</style>
