<template>
    <div>
        <v-container grid-list-md fluid>
            <h1>Zloženie tímu</h1>
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
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 24 : 4}`"
                            >
                                <v-toolbar
                                        color="#007bff"
                                        dark
                                >
                                    <v-toolbar-title>{{data.title}}</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <img :src="require('./resources/imgProfiles/' + data.src + '.jpg')" alt="image not found">
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
                // picker: new Date().toISOString().substr(0, 10),
                // landscape: false,
                // reactive: false
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

    img {
        width: 20%;
        margin: 0 25px 0 0;
        float: left;
        /*margin: 20px;*/

    }
</style>
