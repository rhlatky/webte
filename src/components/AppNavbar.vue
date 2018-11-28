<template>
    <div>
        <v-navigation-drawer
                v-model="sideNav"
                absolute
                temporary
        >
            <v-list>
                <template v-for="(item) in menuItems">
                    <v-list-tile v-if="!item.haveChilds" :key="item.title">
                        <v-list-tile-action>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile>
                    <template v-if="item.haveChilds">
                        <v-list-group :key="item.i"
                                      prepend-icon="account_circle"
                                      value="true"
                        >
                            <v-list-tile slot="activator">
                                <v-list-tile-title>{{item.title}}</v-list-tile-title>
                            </v-list-tile>

                            <template v-for="child in item.childs">

                                <v-list-tile class="indent-second-level" :key="child.title" v-if="!child.haveChilds">
                                    <v-list-tile-title>{{child.title}}</v-list-tile-title>
                                </v-list-tile>

                                <v-list-group v-else :key="child.title"
                                              no-action
                                              sub-group
                                              value="true"
                                >
                                    <v-list-tile slot="activator">
                                        <v-list-tile-title>{{child.title}}</v-list-tile-title>
                                    </v-list-tile>

                                    <v-list-tile
                                            v-for="(sChild, i) in child.childs"
                                            :key="i"
                                            @click=""
                                    >
                                        <!--<v-list-tile-action>-->
                                        <!--<v-icon>{{sChild.icon}}</v-icon>-->
                                        <!--</v-list-tile-action>-->
                                        <v-list-tile-title class="indent-third-level">{{sChild.title}}
                                        </v-list-tile-title>
                                    </v-list-tile>
                                </v-list-group>
                            </template>
                        </v-list-group>
                    </template>
                </template>
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
                menuItems: [{icon: "supervisor_account", title: "View Meetups", haveChilds: false},
                    { icon: "room", title: "Organize Meetup", haveChilds: true, childs: [{
                                icon: "room",
                                title: "Child 1",
                                haveChilds: true,
                                childs: [{icon: "face", title: "Child 1.2", haveChilds: false}]
                            },
                            {icon: "face", title: "Child 2", haveChilds: false}
                        ]
                    },
                    {icon: "face", title: "Sign up", haveChilds: false},
                    {icon: "lock_open", title: "Sign in", haveChilds: false}
                ],

                admins: [["Management", "people_outline"], ["Settings", "settings"]],
                cruds: [
                    ["Create", "add"],
                    ["Read", "insert_drive_file"],
                    ["Update", "update"],
                    ["Delete", "delete"]
                ],
                sideNav: false
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
