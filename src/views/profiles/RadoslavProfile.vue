<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex>
                    <v-card light>
                        <v-card-title class="text-xs-center"><h1>Radoslav Hlatký</h1></v-card-title>
                        <!--<v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>-->
                        <v-card-text>
                            <img src="./resources/imgProfiles/rado.jpg" alt=" Image not found">
                            <div id="profileText"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    let photo = document.createElement('img');
    photo.src = "./profiles/resources/imgProfiles/seen.jpg";
    photo.alt = "neajde JSON, fuck";
    import json from './resources/profiles.json';


    export default {
        name: "RadoslavProfile",
        mounted: function () {

            /*TODO: PHOTO:D*/
            let text = json.profile1.text;
            document.getElementById("profileText").innerHTML = text;

        }
    }


</script>

<style scoped>
    img {
        width: 200px;
        margin: 0 25px 0 0;
        float: left;
    }
</style>
