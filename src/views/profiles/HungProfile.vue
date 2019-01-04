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
                            <v-toolbar-title>Hung Tran Minh</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <img src="./resources/imgProfiles/hung.jpg" alt=" Image not found">
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
                            <div id="contactText"></div>
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
            let contact = json.profile3.contact;

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
