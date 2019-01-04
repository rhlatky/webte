<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex md6>
                    <v-card light>
                        <v-toolbar
                                color="#007bff"
                                dark
                        >
                            <v-toolbar-title>Hung Tran Minh</v-toolbar-title>
                        </v-toolbar>                        <v-card-text>
                            <img src="./resources/imgProfiles/hung.jpg" alt=" Image not found">
                            <div id="profileText"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex md6>
                    <v-card light>
                        <!--<v-card-title class="text-xs-center vCard"><h1>Kontakt</h1></v-card-title>-->
                        <!--<v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>-->
                        <v-toolbar
                                color="#007bff"
                                dark
                        >
                            <v-toolbar-title>Kontakt</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <!--<img src="./resources/imgProfiles/seen.jpg" alt=" Image not found">-->
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
            // document.getElementById("profileText").appendChild(photo);
            // window.alert(text);
        }
    }


</script>

<style scoped>
    img {
        width: 30%;
        /*height: 200px;*/
        margin: 0px 25px 0 0;
        float: left;
    }
</style>