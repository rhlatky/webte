<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex md6>
                    <v-card light>
                        <!--<v-card-title class="text-xs-center vCard"><h1>Dinh Nguyen Tien</h1></v-card-title>-->
                        <v-toolbar
                                color="#007bff"
                                dark
                        >
                            <v-toolbar-title>Dinh Nguyen Tien</v-toolbar-title>
                        </v-toolbar>
                        <!--<v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>-->
                        <v-card-text>
                            <img src="./resources/imgProfiles/seen.jpg" alt=" Image not found">
                            <!--<div id="profilImg"></div>-->
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
    // let photo = document.createElement('img');
    // photo.src = "./profiles/resources/imgProfiles/seen.jpg";
    // photo.alt = "neajde JSON,";
    import json from './resources/profiles.json';


    export default {
        name: "DinhProfile",
        mounted: function () {

            /*TODO: PHOTO:D*/
            let text = json.profile2.text;
            let contact = json.profile2.contact;
            // let img = document.createElement("img");
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
        margin: 0px 25px 0 0;
        float: left;
    }

</style>