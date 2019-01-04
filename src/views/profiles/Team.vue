<template>
    <div>
        <v-hover>
            <v-card
                    slot-scope="{ hover }"
                    :class="`elevation-${hover ? 12 : 2}`"
                    class="mx-auto"
                    width="344"
            >
                <v-card-title>
                    <div>
                        <span class="headline">Cafe Badilico</span>
                        <div class="d-flex">
                            <v-rating
                                    :value="value"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                            ></v-rating>
                            <div class="ml-2 grey--text text--darken-2">
                                <span>{{ value }}</span>
                                <span>({{ reviews }})</span>
                            </div>
                        </div>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-0">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>
        </v-hover>

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
                    <router-link :to="data.link">
                        <!--<span>https://vuetifyjs.com/en/components/hover</span>-->
                        <v-hover>
                            <v-card class = "cards"
                                    dark color="#007bff"
                                    slot-scope="{ hover }"
                                    :class="`elevation-${hover ? 12 : 2}`"
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
                myJson: json
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
.cards:hover {
    text-decoration:none ;
}
</style>
