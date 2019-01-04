<template>
    <div id="mainContainer">
        <h1>DnT's "Puzzle" </h1>
        <!--<a href="https://www.w3schools.com/HTML/html5_draganddrop.asp" target="_blank">Zdroj</a>-->
        <h2>
            <span id="gameOver">Vyhral(a) si, som rád</span>
            <label id="minutes">00</label>:<label id="seconds">00</label>
        </h2>
        <div>
            <button id="playButton" class="button1 bouncy" v-on:click="watch">Play</button>
            <button id="restartButton" class="button1 bouncy" v-on:click="restart">Restart</button>
            <button id="demoButton" class="button1 bouncy" v-on:click="demo">Demo</button>
            <span id="spanDemo"></span>

        </div>

        <v-container grid-list-md text-xs-center fluid>
            <v-layout align-start justify-center row>
                <v-flex xs12 id="puzzleFlex">
                    <!--<v-card>-->
                    <div id="myAnimation"></div>
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
    /*ech*/
    let dragID = ["drag-map-Antananarivo", "drag-map-Fianarantsoa", "drag-map-Mahajanga", "drag-map-Toamasina", "drag-map-Toliara",
        "drag-map-Antisiranana", "drag-seal-part1", "drag-seal-part2"];

    let dropID = ["map-Antananarivo", "map-Fianarantsoa", "map-Mahajanga", "map-Toamasina", "map-Toliara",
        "map-Antisiranana", "seal-part1", "seal-part2",];


    export default {
        name: "gameDinh",
        methods: {
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
                document.getElementById("playButton").classList.remove("bouncy");
                document.getElementById("demoButton").disabled = true;
                document.getElementById("demoButton").classList.remove("bouncy");



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
                document.getElementById("playButton").disabled = true;
                document.getElementById("playButton").classList.remove("bouncy");
                document.getElementById("demoButton").disabled = true;
                document.getElementById("demoButton").classList.remove("bouncy");

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
        /*position: imgRado;*/
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
        /*position: imgRado;*/
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

    button.button1 {
        display: inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #000000;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: #000000;
        text-align: center;
        transition: all 0.2s;
    }

    button.button1:hover {
        color: white;
        background-color: #007bff;
        border: 0.1em solid #007bff;

    }

    @media all and (max-width: 30em) {
        button.button1 {
            display: block;
            margin: 0.4em auto;
        }
    }

    .bouncy{
        animation:bouncy 5s infinite linear;
        position:relative;
    }
    @keyframes bouncy {
        0%{top:0em}
        40%{top:0em}
        43%{top:-0.9em}
        46%{top:0em}
        48%{top:-0.4em}
        50%{top:0em}
        100%{top:0em;}
    }

    #mainContainer {
        margin: 0 20px;
    }

    #puzzleFlex {
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

    #spanDemo {
        /*margin-top: -500px;*/
        margin-left: 10px;
    }

</style>
