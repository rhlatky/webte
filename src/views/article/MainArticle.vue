<template>
    <div>
        <h1>Main Article</h1>
        <div id="app">
            <v-container grid-list-md text-xs-center fluid>
                <v-layout align-start justify-center row>
                    <v-flex
                            v-for="data in myJson"
                            v-bind:key="data.title"
                            v-bind:text="data.text"
                            v-bind:source="data.source"
                            v-bind:color="data.color"
                            md4
                    >
                        <v-card dark v-bind:color=data.color>
                            <v-card-title><h2>{{data.title}}</h2></v-card-title>
                            <v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>
                            <v-card-actions>
                                <a :href="data.source" target="_blank">
                                    source
                                </a>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
    import json from '../../resources/articles'

    export default {
        data() {
            return {
                myJson: json
            }
        }
    }

    // export default {
    //     name: "MainArticle"
    // }
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

</style>