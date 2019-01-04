<template>
    <div>
        <v-container grid-list-md fluid>
            <h1>TEAM COMPONENT</h1>
            <v-layout align-start justify-center row>
                <v-flex
                        v-for="data in myJson"
                        :key="data.id"
                        :text="data.text"
                        :source="data.source"
                        :color="data.color"
                        md4
                >
                    <router-link :to="data.link" tag="li">
                        <v-hover>
                            <v-card class="cards"
                                    dark color="#007bff"
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 24 : 4}`"
                            >
                                <v-card-title class=" text-xs-center">
                                    <h2 style="text-decoration: none">{{data.title}}</h2>
                                </v-card-title>

                                <v-card-text>
                                    <span :id="data.id">{{data.text.slice(0, 251)}} ...</span>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </router-link>

                </v-flex>
                <v-date-picker v-model="picker" :show-current = "true"></v-date-picker>

            </v-layout>
        </v-container>
    </div>
</template>

<script>

    import json from './resources/profiles'

    export default {
        name: "Team",
        data() {
            return {
                myJson: json,
                picker: new Date().toISOString().substr(0, 10),
                landscape: false,
                reactive: false
            }
        },
        mounted: function () {

            /*TODO: zistit ako sa iteruje, bo dajak nejde :D*/
            let text = document.getElementById(json.profile1.id).innerText;
            document.getElementById(json.profile1.id).innerHTML = text;

            text = document.getElementById(json.profile2.id).innerText;
            document.getElementById(json.profile2.id).innerHTML = text;

            text = document.getElementById(json.profile3.id).innerText;
            document.getElementById(json.profile3.id).innerHTML = text;
        }
    }
</script>

<style scoped>
    /*.cards:hover {*/
    /*text-decoration: none;*/
    /*}*/

    li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li :hover {
        cursor: pointer;
    }
</style>
