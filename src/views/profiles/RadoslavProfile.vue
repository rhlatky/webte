<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex md6>
                    <v-card light color="#E3F2FD">
                        <v-toolbar
                                color="#007bff"
                                dark
                        >
                            <v-toolbar-title>Radoslav Hlatký</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <img src="./resources/imgProfiles/rado.jpg" alt=" Image not found">
                            <div id="profileText"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex md6>
                    <v-card light color="#E3F2FD">
                        <v-toolbar
                                color="#007bff"
                                dark
                        >
                            <v-toolbar-title>Kontakt</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <div id="contactText">aaa</div>
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
            let contact = json.profile1.contact;

            document.getElementById("profileText").innerHTML = text;
            document.getElementById("contactText").innerHTML = contact;
        }
    }
</script>

<style scoped>
    img {
        width: 30%;
        margin: 0 25px 0 0;
        float: left;
    }
</style>
