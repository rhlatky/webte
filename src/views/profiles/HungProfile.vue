<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex>
                    <v-card light>
                        <v-card-title class="text-xs-center"><h1>Hung Tran Minh</h1></v-card-title>
                        <v-card-text>
                            <img src="./resources/imgProfiles/hung.jpg" alt=" Image not found">
                            <div id="profileText"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import json from './resources/profiles.json';
    export default {
        name: "HungProfile",
        mounted: function () {

            /*TODO: PHOTO:D*/
            let text = json.profile3.text;
            document.getElementById("profileText").innerHTML = text;
            // document.getElementById("profileText").appendChild(photo);
            // window.alert(text);
        }
    }


</script>

<style scoped>
    img {
        width: 200px;
        height: 200px;
        margin: 0px 25px 0 0;
        float: left;
    }
</style>