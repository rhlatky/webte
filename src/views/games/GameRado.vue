<template>
    <!--<div>-->
    <!--<div v-for="data in puzzleJson.images" :key="data.id" >{{ data.id }}-->
    <!--<img :src="require('./imgRado/' + data.src + '.jpg')" alt="nope">-->
    <!--</div>-->
    <!--</div>-->


    <div id="mainContainer">
        <h1>Radoslav Hlatký</h1>

        <!--<h1>DnT's "Puzzle" </h1>-->
        <!--&lt;!&ndash;<a href="https://www.w3schools.com/HTML/html5_draganddrop.asp" target="_blank">Zdroj</a>&ndash;&gt;-->
        <!--<h2>-->
        <!--<span id="gameOver">Vyhral(a) si, som rád</span>-->
        <!--<label id="minutes">00</label>:<label id="seconds">00</label>-->
        <!--</h2>-->
        <!--<div>-->
        <!--<button id="playButton" v-on:click="watch">Play</button>-->
        <!--<button id="restartButton" v-on:click="restart">Restart</button>-->
        <!--<button id="demoButton" v-on:click="demo">Demo</button>-->
        <!--<span id = "spanDemo"></span>-->

        <!--</div>-->
        <v-container grid-list-md text-xs-center fluid>
            <v-layout align-start justify-center row>
                <v-flex xs12 class="puzzleContainer">

                    <div v-for="blank in puzzleJson.blanks"
                         :style="{
                         'background-image': 'url(' + require('./imgRado/' + blank.src + '.png') + ')',
                         'position': 'relative'}"
                         @drop="dropImg"
                         @dragover="allowDrop"
                         :id="blank.id"
                         :key="blank.id">

                    </div>

                    <div id="parts-to-drag">
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
    let dropped = 0;
    let timer = 0;

    export default {
        name: "GameRado",
        data() {
            return {
                puzzleJson: json
            }
        },
        methods: {
            allowDrop: function allowDrop(ev) {
                ev.preventDefault();
            },

            dropImg: function drop(ev) {
                ev.preventDefault();
                for (let i = 0; i < json.blanks; i++) {
                    if (ev.target.id === json.blanks[i].id) {
                        let data = ev.dataTransfer.getData("Part" + i);
                        if (data) {
                            ev.target.appendChild(document.getElementById(data));
                            ev.target.style.backgroundImage = "none";
                            dropped++;
                            if (dropped === 8) {
                                clearInterval(timer);
                                document.getElementById("gameOver").style.display = "block";
                                document.getElementById("gameOver").style.background = "no-drop";

                                return;
                            }
                            return;
                        }
                    }
                }
            },
            dragImg: function drag(ev) {
                for (let i = 0; i < json.images.length; i++) {
                    if (ev.target.id === json.images[i].id) {
                        ev.dataTransfer.setData("blank-" + i, ev.target.id);
                    }
                }
            },

            watch: function watch() {
                //https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
                dropped = 0;
                document.getElementById("parts-to-drag").style.display = "block";
                document.getElementById("playButton").disabled = true;
                document.getElementById("playButton").style.background = 'red';
                document.getElementById("demoButton").style.background = "red";
                document.getElementById("demoButton").disabled = true;
                let sec = 0;

                function pad(val) {
                    return val > 9 ? val : "0" + val;
                }

                timer = setInterval(function () {
                    document.getElementById("seconds").innerHTML = pad(++sec % 60);
                    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
                }, 1000);

            },
            restart: function restart() {
                location.reload();
            },
            demo: function demo() {
                document.getElementById("playButton").disabled = true;
                document.getElementById("playButton").style.background = "red";

                document.getElementById("demoButton").disabled = true;
                document.getElementById("demoButton").style.background = "red";

                document.getElementById("parts-to-drag").style.display = "block";

                let elem = document.getElementById("myAnimation");
                let posX;
                let posY;
                let id;

                myMove();
                for (let i = 1; i < dropID.length; i++) {
                    setTimeout(function () {
                        document.getElementById(dropID[i]).appendChild(document.getElementById(dragID[i]));
                        document.getElementById(dropID[i]).style.backgroundImage = "none";
                    }, i * 1000);
                }
                document.getElementById("spanDemo").innerText = "\n1) Stlač ľavým tlačidlom na obrázok, kt. chceš posunúť\n2) Posuň obrázok, kde ho chceš pustiť a pusti ľavé tlačidlo\n3) Ak si ho pustil na správne miesto, tak obrázok sa tam položí";

                function myMove() {
                    elem.style.zIndex = "10";
                    elem.appendChild(document.getElementById(dragID[0]));
                    posX = 550;
                    posY = 0;
                    id = setInterval(frame, 10);
                }

                function frame() {
                    if (posX === 485) {
                        clearInterval(id);
                        elem.style.zIndex = "-1";
                        document.getElementById(dropID[0]).style.backgroundImage = "none";
                        document.getElementById("map-Antananarivo").appendChild(document.getElementById(dragID[0]));

                    } else {
                        posX--;
                        posY -= 4;
                        elem.style.top = posX + 'px';
                        elem.style.left = posY + 'px';
                    }
                }
            }
        }
    }
</script>

<style>

    #parts-to-drag {
        min-width: 1100px;
        margin-top: -500px;
        margin-left: 1200px;
    }

    #parts-to-drag img {
        margin: 0 10px;
    }

    #gameOver {
        display: none;
    }

    /*button {*/
    /*background-color: #00ff08; !* Green *!*/
    /*border: 1px solid black;*/
    /*color: black;*/
    /*padding: 16px 32px;*/
    /*text-align: center;*/
    /*text-decoration: none;*/
    /*display: inline-block;*/
    /*font-size: 16px;*/
    /*margin: 4px 2px;*/
    /*!*-webkit-transition-duration: 0.4s; !* Safari *!*!*/
    /*!*transition-duration: 0.4s;*!*/
    /*!*cursor: pointer;*!*/
    /*}*/

    #mainContainer {
        margin: 0 20px;
    }

    .puzzleContainer {
        margin-top: 50px;
        margin-left: -800px;
    }

    #blank-1 {
        width: 250px;
        height: 292px;
        margin-left: 372px;
        margin-top: 0;
        z-index: 5;

    }

    #blank-2 {
        width: 216px;
        height: 243px;
        margin-left: 565px;
        margin-top: -292px;
        z-index: 5;

    }

    #blank-3 {
        width: 298px;
        height: 243px;
        margin-left: 724px;
        margin-top: -243px;
        z-index: 5;

    }

    #blank-4 {
        width: 207px;
        height: 292px;
        margin-left: 965px;
        margin-top: -243px;
        z-index: 5;

    }

    #blank-5 {
        width: 209px;
        height: 241px;
        margin-left: 372px;
        margin-top: -66px;
        z-index: 5;

    }

    #blank-6 {
        width: 257px;
        height: 289px;
        margin-left: 524px;
        margin-top: -289px;
        z-index: 5;

    }

    #blank-7 {
        width: 298px;
        height: 289px;
        margin-left: 724px;
        margin-top: -289px;
        z-index: 5;

    }

    #blank-8 {
        width: 207px;
        height: 241px;
        margin-left: 965px;
        margin-top: -241px;
        z-index: 1;

    }

</style>
