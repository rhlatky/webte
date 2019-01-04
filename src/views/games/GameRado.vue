<template>
    <div id="mainContainer">
        <div class="user-layout">
            <h1>Puzzle by RHlatky</h1>
            <h2>
                <span class="stop-watch">
                     <label id="minutes">00</label>:<label id="seconds">00</label>
                </span>
                <span id="win">Gratulujem !</span>
            </h2>
            <v-btn round color="green" id="play" v-on:click="play">
                <v-icon>play_circle_outline</v-icon>
            </v-btn>
            <v-btn round color="blue" id="restart" v-on:click="restart">
                <v-icon>replay</v-icon>
            </v-btn>
            <v-btn round color="yellow" id="infoButton" v-on:click="info">
                <v-icon>info_outline</v-icon>
            </v-btn>
        </div>
        <v-container grid-list-md text-xs-center fluid>
            <v-layout align-start justify-center row>
                <v-flex xs12 id="puzzle-container">
                    <div v-for="blank in puzzleJson.blanks"
                         :style="{
                         'background-image': 'url(' + require('./imgRado/' + blank.src + '.png') + ')',
                         'position': 'relative'}"
                         @drop="dropImg"
                         @dragover="allowDrop"
                         :id="blank.id"
                         :key="blank.id">

                    </div>

                    <div id="puzzles">
                        <img v-for="data in puzzleJson.images"
                             :key="data.id"
                             :src="require('./imgRado/' + data.src + '.png')"
                             :style="{'position': 'relative'}"
                             alt="image not found"
                             :id="data.id"
                             draggable="true"
                             @dragstart="dragImg"
                        >
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import json from './imgRado/puzzle'

    let droppedImages = 0;
    let timer = 0;

    export default {
        name: "GameRado",
        data() {
            return {
                puzzleJson: json
            }
        },
        methods: {
            allowDrop: function (ev) {
                ev.preventDefault();
            },

            dropImg: function (ev) {
                for (let i = 0; i < json.blanks.length; i++) {
                    if (ev.target.id === json.blanks[i].id) {
                        if (ev.dataTransfer.getData(json.blanks[i].id)) {
                            ev.target.appendChild(document.getElementById(ev.dataTransfer.getData(json.blanks[i].id)));
                            droppedImages++;
                            if (droppedImages === 8) {
                                clearInterval(timer);
                                document.getElementById("win").style.display = "block";
                                document.getElementById("win").style.background = "no-drop";
                                return;
                            }
                        }
                    }
                }
            },
            dragImg: function (ev) {
                for (let i = 0; i < json.images.length; i++) {
                    if (ev.target.id === json.images[i].id) {
                        ev.dataTransfer.setData("blank-" + json.images[i].id, ev.target.id);
                    }
                }
            },

            play: function () {
                droppedImages = 0;
                document.getElementById("puzzles").style.display = "block";
                document.getElementById("puzzle-container").style.display = "block";
                document.getElementById("play").disabled = true;
                document.getElementById("play").style.background = 'red';
                document.getElementById("infoButton").style.background = "red";
                document.getElementById("infoButton").disabled = true;
                let sec = 0;

                function clock(val) {
                    return val > 9 ? val : "0" + val;
                }

                timer = setInterval(function () {
                    document.getElementById("seconds").innerHTML = clock(++sec % 60);
                    document.getElementById("minutes").innerHTML = clock(parseInt(sec / 60, 10));
                }, 1000);

            },
            restart: function restart() {
                location.reload();
            },
            info: function () {
                document.getElementById("play").disabled = true;
                document.getElementById("infoButton").disabled = true;
                document.getElementById("puzzles").style.display = "block";
                document.getElementById("puzzle-container").style.display = "block";

                for (let i = 0; i < json.blanks.length; i++) {
                    setTimeout(function () {
                        for (let j = 0; j < json.images.length; j++) {
                            if (json.blanks[i].id === "blank-" + json.images[j].id)
                                document.getElementById(json.blanks[i].id).appendChild(document.getElementById(json.images[j].id));
                        }
                    }, i * 1000);
                }

                setTimeout(function () {
                    location.reload();
                }, 8500);
            }
        }
    }
</script>

<style>

    .stop-watch {
        border: 2px solid black;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 50%;
    }

    #win {
        display: none;
    }

    .user-layout {
        text-align: center;
    }

    .user-layout button {
        margin: 4px 2px;

    }

    #mainContainer {
        margin: 0 20px;
    }

    #puzzle-container {
        margin-left: -800px;
        display: none;
    }

    #blank-1 {
        width: 250px;
        height: 292px;
        margin-left: 372px;
        margin-top: 0;
        z-index: 99;
    }

    #blank-2 {
        width: 216px;
        height: 243px;
        margin-left: 565px;
        margin-top: -292px;
        z-index: 99;
    }

    #blank-3 {
        width: 298px;
        height: 243px;
        margin-left: 724px;
        margin-top: -243px;
        z-index: 99;
    }

    #blank-4 {
        width: 207px;
        height: 292px;
        margin-left: 965px;
        margin-top: -243px;
        z-index: 99;
    }

    #blank-5 {
        width: 209px;
        height: 241px;
        margin-left: 372px;
        margin-top: -66px;
        z-index: 99;
    }

    #blank-6 {
        width: 257px;
        height: 289px;
        margin-left: 524px;
        margin-top: -289px;
        z-index: 99;
    }

    #blank-7 {
        width: 298px;
        height: 289px;
        margin-left: 724px;
        margin-top: -289px;
        z-index: 99;
    }

    #blank-8 {
        width: 207px;
        height: 241px;
        margin-left: 965px;
        margin-top: -241px;
        z-index: 99;
    }

    #puzzles {
        min-width: 1100px;
        margin-top: -470px;
        margin-left: 1200px;
        display: none;
    }

    #puzzles img {
        margin: 0 10px;
    }
</style>
