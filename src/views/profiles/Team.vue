<template>
    <div>
        <v-container grid-list-md>
            <h1>Zloženie tímu</h1>
            <v-layout align-center justify-center row>
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
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 24 : 4}`"
                                    color="#E3F2FD"
                            >
                                <v-toolbar
                                        color="#007bff"
                                        dark
                                >
                                    <v-toolbar-title>{{data.title}}</v-toolbar-title>
                                </v-toolbar>
                                <v-img class="profile-images"
                                        :src="require('./resources/imgProfiles/' + data.src + '.jpg')"
                                        aspect-ratio="1"
                                        max-width="325px"
                                        :contain=true
                                ></v-img>
                                <v-card-text>
                                    <span :id="data.id">{{data.text.slice(0, 205)}} ...</span>
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

    import json from './resources/profiles.json'

    export default {
        name: "Team",
        data() {
            return {
                myJson: json
            }
        },
        mounted: function () {
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

    li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li :hover {
        cursor: pointer;
    }

    h1 {
        text-align: center;
        font-size: 60px;
    }
</style>
