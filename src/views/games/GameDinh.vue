<template>
    <div id="mainContainer">
        <h1>DnT's "Puzzle" </h1>
        <!--<a href="https://www.w3schools.com/HTML/html5_draganddrop.asp" target="_blank">Zdroj</a>-->
        <h2>
            <span id="gameOver">Vyhral si, som rád</span>
            <label id="minutes">00</label>:<label id="seconds">00</label>
        </h2>
        <div>
            <button id="playButton" v-on:click="watch">Play</button>
            <button id="restartButton" v-on:click="restart">Restart</button>
            <button id="demoButton" v-on:click="demo">Demo</button>

        </div>

        <v-container  grid-list-md text-xs-center fluid>
            <v-layout align-start justify-center row>
                <v-flex xs12 id ="puzzleFlex">
                    <!--<v-card>-->
                    <div id ="myAnimation"></div>
                    <div id="map-Antananarivo" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="map-Antisiranana" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="map-Fianarantsoa" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="map-Mahajanga" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="map-Toamasina" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="map-Toliara" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="seal-part1" v-on:drop="drop" v-on:dragover="allowDrop"></div>
                    <div id="seal-part2" v-on:drop="drop" v-on:dragover="allowDrop"></div>

                    <div id="parts-to-drag">
                        <img id="drag-map-Antananarivo" draggable="true" v-on:dragstart="drag"
                             src="./imgDinh/Antananarivo.png"
                             alt="map-Antanarivo">
                        <img id="drag-map-Fianarantsoa" draggable="true" v-on:dragstart="drag"
                             src="./imgDinh/Fianarantsoa.png"
                             alt="map-Fianarantsoa">
                        <img id="drag-map-Mahajanga" draggable="true" v-on:dragstart="drag"
                             src="./imgDinh/Mahajanga.png"
                             alt="map-Mahajanga">
                        <img id="drag-map-Toamasina" draggable="true" v-on:dragstart="drag"
                             src="./imgDinh/Toamasina.png"
                             alt="map-Toamasina">
                        <img id="drag-map-Toliara" draggable="true" v-on:dragstart="drag" src="./imgDinh/Toliara.png"
                             alt="map-Toliara">
                        <img id="drag-map-Antisiranana" draggable="true" v-on:dragstart="drag"
                             src="./imgDinh/antisiranana2.png"
                             alt="map-Antisiranana">
                        <img id="drag-seal-part1" draggable="true" v-on:dragstart="drag" src="./imgDinh/Seal_1.png"
                             alt="flag-white">
                        <img id="drag-seal-part2" draggable="true" v-on:dragstart="drag" src="./imgDinh/Seal_2.png"
                             alt="flag-red">
                    </div>
                    <!--</v-card>-->
                </v-flex>
            </v-layout>
        </v-container>

    </div>


</template>

<script>
    let dropped = 0;
    let timer;
    let dragID = ["drag-map-Antananarivo", "drag-map-Fianarantsoa", "drag-map-Mahajanga", "drag-map-Toamasina", "drag-map-Toliara",
        "drag-map-Antisiranana", "drag-seal-part1", "drag-seal-part2"];

    let dropID = ["map-Antananarivo", "map-Fianarantsoa", "map-Mahajanga", "map-Toamasina", "map-Toliara",
        "map-Antisiranana", "seal-part1", "seal-part2",];


    export default {
        name: "gameDinh",
        methods: {
            //https://www.w3schools.com/HTML/html5_draganddrop.asp
            //     set_zIndex: function set_zIndex(dropID_zIndex) {
            //     for (let i = 0; i < dropID.length; i++) {
            //         let id = dropID_zIndex; //je to tu, aby mi nepodciarkovalo, ze dropID_zIndex je unused -_-
            //         if (id === dropID[i]) {
            //             document.getElementById(dropID[i]).style.zIndex = "1";
            //         } else
            //             document.getElementById(dropID[i]).style.zIndex = "0";
            //
            //     }
            // }
            allowDrop: function allowDrop(ev) {
                ev.preventDefault();
                // console.log("something");
            },
            drag: function drag(ev) {
                // ev.dataTransfer.setData("text", ev.target.id);
                for (let i = 0; i < dragID.length; i++) {
                    if (ev.target.id === dragID[i]) {
                        // this.set_zIndex(dropID[i]);
                        ev.dataTransfer.setData("Part" + i, ev.target.id);
                        // return;
                    }
                }
            },
            drop: function drop(ev) {
                ev.preventDefault();
                for (let i = 0; i < dropID.length; i++) {
                    if (ev.target.id === dropID[i]) {
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
//                this.$forceUpdate();
                location.reload();

            },
            demo: function demo() {
                document.getElementById("playButton").style.background = "red";
                document.getElementById("playButton").disabled = true;
                document.getElementById("demoButton").style.background = "red";
                document.getElementById("demoButton").disabled = true;
                document.getElementById("parts-to-drag").style.display = "block";
                // setTimeout(function () {
                //     document.getElementById(dropID[0]).appendChild(document.getElementById(dragID[0]));
                //     document.getElementById(dropID[0]).style.backgroundImage = "none";
                // }, 1000)
                myMove();
                for (let i = 1; i < dropID.length;i++) {
                    setTimeout(function (){
                        document.getElementById(dropID[i]).appendChild(document.getElementById(dragID[i]));
                        document.getElementById(dropID[i]).style.backgroundImage = "none";
                    }, i*1000);

                }

                function myMove() {
                        let elem = document.getElementById("myAnimation");
                        elem.style.zIndex = "10";
                        elem.appendChild(document.getElementById(dragID[0]));

                    let posX = 550;
                    let posY = 0;
                    let id = setInterval(frame, 5);
                    function frame() {
                        if (posX === 420) {
                            clearInterval(id);
                            elem.style.zIndex = "-1";
                            document.getElementById(dropID[0]).style.backgroundImage = "none";
                            document.getElementById("map-Antananarivo").appendChild(document.getElementById(dragID[0]));

                        } else {
                            posX--;
                            posY -= 2;
                            elem.style.top = posX + 'px';
                            elem.style.left = posY + 'px';
                        }
                    }
                }
            },


        }
    }
</script>

<style scoped>

    #map-Antananarivo {
        position: relative;
        background-image: url("imgDinh/AntananarivoBlank.png");
        width: 110px;
        height: 110px;
        margin-left: 572px;
        margin-top: 48px;
        /*border: 2px solid pink;*/
        /*border: 2px solid blue;*/
        z-index: 5;

    }

    #map-Antisiranana {
        position: relative;
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 661px;
        margin-top: -348px;
        /*border: 2px solid red;*/
        z-index: -1;

    }

    #map-Antisiranana {
        position: relative;
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 662px;
        margin-top: -348px;
        /*border: 2px solid red;*/
        /*border: 2px solid red;*/
        z-index: 1;

    }

    #map-Fianarantsoa {
        position: relative;
        background-image: url("imgDinh/FianarantsoaBlank.png");
        width: 150px;
        height: 180px;
        margin-left: 553px;
        margin-top: 148px;
        /*border: 2px solid red;*/
        z-index: 1;

    }

    #map-Mahajanga {
        /*position: static;*/
        background-image: url("imgDinh/MahajangaBlank.png");
        width: 230px;
        height: 228px;
        margin-left: 512px;
        margin-top: -425px;
        /*border: 2px solid red;*/
        z-index: -1;

    }

    #map-Toamasina {
        position: relative;
        background-image: url("imgDinh/ToamasinaBlank.png");
        width: 100px;
        height: 250px;
        margin-left: 655px;
        margin-top: -191px;
        /*border: 2px solid red;*/
        z-index: 1;

    }

    #map-Toliara {
        /*position: static;*/
        background-image: url("imgDinh/ToliaraBlank.png");
        width: 180px;
        height: 310px;
        margin-left: 485px;
        margin-top: -110px;
        /*border: 2px solid red;*/
        z-index: -1;
    }

    #seal-part1 {
        position: relative;
        background-image: url("imgDinh/Seal_1_Blank.png");
        width: 310px;
        height: 310px;
        margin-left: 150px;
        margin-top: -400px;
        /*border: 2px solid blue;*/
    }
    #seal-part2 {
        position: relative;
        background-image: url("imgDinh/Seal_2_Blank.png");
        width: 170px;
        height: 180px;
        margin-left: 150px;
        margin-top: -310px;
        /*border: 2px solid red;*/

    }

    #parts-to-drag {
        margin-top: -300px;
        margin-left: 800px;
        display: none;
    }

    #parts-to-drag img {
        margin: 0 5px;
    }

    #gameOver {
        display: none;
    }

    button {
        background-color: #00ff08; /* Green */
        border: 1px solid black;
        color: black;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        /*-webkit-transition-duration: 0.4s; !* Safari *!*/
        /*transition-duration: 0.4s;*/
        /*cursor: pointer;*/
    }

    #mainContainer{
        margin: 0 20px;
    }

    #puzzleFlex{
        margin-top: 50px;
    }

    #myAnimation {
        width: 110px;
        height: 115px;
        position: absolute;
        /*background-color: red;*/
        margin-top: -50px;
        margin-left: 880px;
        z-index: -1;
    }

    /*button:hover {*/
    /*background-color: #4CAF50;*/
    /*color: white;*/
    /*}*/


</style>