<template>
    <div>
        <v-navigation-drawer v-model="sideNav"
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
                            <v-icon left>{{item.icon}}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    </v-list-tile>
                    <template v-if="item.haveChilds">
                        <v-list-group :key="i"
                                      :prepend-icon=item.icon
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
                                    <v-list-tile-action>
                                        <v-icon>{{children.icon}}</v-icon>
                                    </v-list-tile-action>
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

        <v-toolbar id="toolbar" dense dark class="primary">

            <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>

            <v-toolbar-title router to="/" tag="span" style="margin-left: -5px; margin-right: 5px">
                WebTe project
            </v-toolbar-title>

            <v-toolbar-items class="hidden-xs-only">
                <template v-for="(item, i) in menuItems">
                    <v-btn flat dense
                           v-if="!item.haveChilds"
                           :key="item.name"
                           router
                           exact
                           :to="item.link">{{item.name}}
                    </v-btn>
                    <v-menu offset-y :key="i" v-else>
                        <v-btn flat primary slot="activator">{{item.name}}
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-btn>
                        <v-list dense>
                            <template v-for="(child, j) in item.children">
                                <v-list-tile router exact :to="child.link" v-if="!child.haveChilds" :key="j">
                                    <v-list-tile-title>
                                        {{ child.name }}
                                    </v-list-tile-title>
                                </v-list-tile>

                                <v-menu v-else :key="child.name" offset-x open-on-hover>
                                    <v-list-tile router exact :to="child.link" slot="activator">
                                        <v-list-tile-title>{{child.name}}</v-list-tile-title>
                                        <v-list-tile-action class="justify-end">
                                            <v-icon>keyboard_arrow_right</v-icon>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    <v-list dense>
                                        <template v-for="(sChild, i) in child.children">
                                            <v-list-tile router exact :to="sChild.link" :key="i">
                                                <v-list-tile-title>{{ sChild.name }}</v-list-tile-title>
                                            </v-list-tile>
                                        </template>
                                    </v-list>
                                </v-menu>
                            </template>
                        </v-list>
                    </v-menu>
                </template>
            </v-toolbar-items>
        </v-toolbar>

    </div>
</template>
<script>
    export default {
        name: "AppNavbar",
        data() {
            return {
                menuItems: [
                    {icon: "home", name: "Domov", link: '/', haveChilds: false},
                    {icon: "chrome_reader_mode", name: "Články", link: '/articles', haveChilds: false},
                    {icon: "videogame_asset", name: "Hry", haveChilds: true, children:[
                            {icon: "gamepad", name: "Radoslav", link: '/game/rado', haveChilds: false},
                            {icon: "gamepad", name: "Dinh", link: '/game/dinh', haveChilds: false},
                            {icon: "gamepad", name: "Hung", link: '/game/hung', haveChilds: false},
                        ]},
                    {
                        icon: "lock_open", name: "O nás", haveChilds: true, children: [
                            {icon: "group", name: "Tím", link: '/team', haveChilds: false},
                            {
                                icon: "face",
                                name: "Členovia tímu", haveChilds: true,
                                children: [{
                                    icon: "face",
                                    name: "Radoslav Hlatký",
                                    link: '/team/radoslav',
                                    haveChilds: false
                                },
                                    {icon: "face", name: "Dinh Nguyen Tien", link: '/team/dinh', haveChilds: false},
                                    {icon: "face", name: "Hung Tran Minh", link: '/team/hung', haveChilds: false}]
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
