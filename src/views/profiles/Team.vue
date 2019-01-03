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
                    <v-card dark color = "#007bff">
                        <v-card-title class="text-xs-center"><h2>{{data.title}}</h2></v-card-title>
                        <v-card-text>
                            <span :id="data.id">{{data.text.slice(0, 251)}} ...</span>
                        </v-card-text>
                        <!--<v-card-text><span :id="data.id">{{data.text}}</span>-->
                        <!--</v-card-text>-->


                    </v-card>
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

</style>
