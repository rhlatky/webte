<template>
    <div id="mainContainer">
        <h1>Dinh Nguyen Tien Game 111111a</h1>
        <a href="https://www.w3schools.com/HTML/html5_draganddrop.asp" target="_blank">Zdroj</a>
        <h2>
            <label id="minutes">00</label>:<label id="seconds">00</label>
        </h2>

        <!--<v-layout align-center justify-center row fill-height>-->
        <!--&lt;!&ndash;<div id="map-Antananarivo" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="map-Antisiranana" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="map-Fianarantsoa" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="map-Mahajanga" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="map-Toamasina" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="map-Toliara" v-on:drop="drop" v-on:dragover="allowDrop"></div>&ndash;&gt;-->

        <!--&lt;!&ndash;<div id="flag">&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="flag-white"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="flag-red"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="flag-green"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--</v-layout>-->

        <v-container grid-list-md text-xs-center id="v">
            <v-layout row wrap>
                <v-flex xs12>
                    <!--<v-card>-->
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
    let dragID = ["drag-map-Antananarivo", "drag-map-Fianarantsoa", "drag-map-Mahajanga", "drag-map-Toamasina", "drag-map-Toliara",
        "drag-map-Antisiranana", "drag-seal-part1", "drag-seal-part2"];

    let dropID = ["map-Antananarivo", "map-Fianarantsoa", "map-Mahajanga", "map-Toamasina", "map-Toliara",
        "map-Antisiranana", "seal-part1", "seal-part2",];


    export default {
        name: "gameDinh",
        methods: {
            set_zIndex: function set_zIndex(dropID_zIndex) {
                for (let i = 0; i < dropID.length; i++) {
                    let id = dropID_zIndex; //je to tu, aby mi nepodciarkovalo, ze dropID_zIndex je unused -_-
                    if (id === dropID[i]) {
                        document.getElementById(dropID[i]).style.zIndex = "1";
                    } else
                        document.getElementById(dropID[i]).style.zIndex = "0";

                }
            },
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
                            break;
                        }
                    }
                }
                // ev.preventDefault();
                // let data = ev.dataTransfer.getData("Part1");
                // ev.target.appendChild(document.getElementById(data));
            },
            watch: function watch() {
                //https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
                let minutesLabel = document.getElementById("minutes");
                let secondsLabel = document.getElementById("seconds");
                let totalSeconds = 0;
                setInterval(setTime, 1000);

                function setTime() {
                    ++totalSeconds;
                    secondsLabel.innerHTML = pad(totalSeconds % 60);
                    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
                }

                function pad(val) {
                    let valString = val + "";
                    if (valString.length < 2) {
                        return "0" + valString;
                    } else {
                        return valString;
                    }
                }
            }
        }
    }
</script>

<style scoped>

    #v {
        margin-top: 200px;
    }

    #map {
        /*margin-left: 572px;*/
        margin-top: 200px;
        /*border: 2px solid pink;*/
    }

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
        margin-top: 300px;
    }

    #parts-to-drag img {
        margin: 0 5px;
    }

</style>