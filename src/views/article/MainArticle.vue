<template>
    <div>
        <v-container grid-list-md fluid>
            <h1>Spravodajstvo</h1>
            <v-layout align-start justify-center row>
                <v-flex
                        v-for="data in myJson"
                        :key="data.id"
                        :text="data.text"
                        :source="data.source"
                        :color="data.color"
                        md4
                >
                    <v-card dark v-bind:color=data.color>
                        <v-card-title class="text-xs-center"><h2>{{data.title}}</h2></v-card-title>
                        <img :src="require('./imgArticle/' + data.src + '.jpg')"
                             alt="image not found"
                        >
                        <!--<v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>-->
                        <v-card-text><span :id="data.id">{{data.text}}</span>
                            <a :href="data.source" target="_blank">
                                source
                            </a>
                        </v-card-text>


                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import json from '../../resources/articles'


    export default {
        data() {
            return {
                myJson: json
            }
        },
        mounted: function () {

            /*TODO: zistit ako sa iteruje, bo dajak nejde :D*/
            let text = document.getElementById(json.article1.id).innerText;
            document.getElementById(json.article1.id).innerHTML = text;

            text = document.getElementById(json.article2.id).innerText;
            document.getElementById(json.article2.id).innerHTML = text;

            text = document.getElementById(json.article3.id).innerText;
            document.getElementById(json.article3.id).innerHTML = text;
            // window.alert(text);
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        text-decoration: underline;
        color: white;
    }

    h1 {
        text-align: center;
        font-size: 60px;
    }

    img {
        width: 70%;
        margin: 0 20px;

    }

</style>
