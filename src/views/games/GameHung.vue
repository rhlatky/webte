<template>
    <div id="all">
        <h1>Hung Tran Minh</h1>
        <p id="win">CONGRATULATIONS YOU WON!!!!<br>YOUR RECORD IS</p>
        <h2>
            <time id="ti"></time>
        </h2>
        <button class="button" id="backButton" v-on:click="back">Back</button>
        <div class="con" id="drops">
            <div id="dz1" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz2" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz3" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz4" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz5" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz6" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz7" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="dz8" v-on:drop="drop" v-on:dragover="allowDrop"></div>
        </div>
        <div class="draggables" id="drags">
            <img id="p1" draggable="true" v-on:dragstart="drag" src="./imgHung/part1.png" alt="puzzle 1">
            <img id="p2" draggable="true" v-on:dragstart="drag" src="./imgHung/part2.png" alt="puzzle 2">
            <img id="p3" draggable="true" v-on:dragstart="drag" src="./imgHung/part3.png" alt="puzzle 3">
            <img id="p4" draggable="true" v-on:dragstart="drag" src="./imgHung/part4.png" alt="puzzle 4">
            <img id="p5" draggable="true" v-on:dragstart="drag" src="./imgHung/part5.png" alt="puzzle 5">
            <img id="p6" draggable="true" v-on:dragstart="drag" src="./imgHung/part6.png" alt="puzzle 6">
            <img id="p7" draggable="true" v-on:dragstart="drag" src="./imgHung/part7.png" alt="puzzle 7">
            <img id="p8" draggable="true" v-on:dragstart="drag" src="./imgHung/part8.png" alt="puzzle 8">
        </div>
        <div class="buttons">
            <button class="button" id="playButton" v-on:click="play(); stopwatch()">Play</button>
            <button class="button" id="demoButton" v-on:click="demo">Demo</button>
        </div>
    </div>
</template>

<script>
    var dropped = 0;
    export default {
        name: "GameHung",
        methods: {
            allowDrop: function allowDrop(ev) {
                ev.preventDefault();
            },
            drag: function drag(ev) {

                switch (ev.target.id) {
                    case "p1":
                        ev.dataTransfer.setData("part1", ev.target.id);
                        break;
                    case "p2":
                        ev.dataTransfer.setData("part2", ev.target.id);
                        break;
                    case "p3":
                        ev.dataTransfer.setData("part3", ev.target.id);
                        break;
                    case "p4":
                        ev.dataTransfer.setData("part4", ev.target.id);
                        break;
                    case "p5":
                        ev.dataTransfer.setData("part5", ev.target.id);
                        break;
                    case "p6":
                        ev.dataTransfer.setData("part6", ev.target.id);
                        break;
                    case "p7":
                        ev.dataTransfer.setData("part7", ev.target.id);
                        break;
                    case "p8":
                        ev.dataTransfer.setData("part8", ev.target.id);
                        break;
                }
            },
            drop: function drop(ev) {
                ev.preventDefault();
                var data;
                switch (ev.target.id) {
                    case "dz1":
                        data = ev.dataTransfer.getData("part1");
                        break;
                    case "dz2":
                        data = ev.dataTransfer.getData("part2");
                        break;
                    case "dz3":
                        data = ev.dataTransfer.getData("part3");
                        break;
                    case "dz4":
                        data = ev.dataTransfer.getData("part4");
                        break;
                    case "dz5":
                        data = ev.dataTransfer.getData("part5");
                        break;
                    case "dz6":
                        data = ev.dataTransfer.getData("part6");
                        break;
                    case "dz7":
                        data = ev.dataTransfer.getData("part7");
                        break;
                    case "dz8":
                        data = ev.dataTransfer.getData("part8");
                        break;
                }
                if (!data) {
                    return
                }
                ev.target.appendChild(document.getElementById(data));
                dropped++;
            },
            play: function play() {
                document.getElementById("drops").style.display = "block";
                document.getElementById("drags").style.display = "block";
                document.getElementById("playButton").style.display = "none";
                document.getElementById("demoButton").style.display = "none";
            },
            stopwatch: function stopwatch() {
                var watch;
                var time = document.getElementById("ti");
                var sec = 0, min = 0, hr = 0;

                function count() {
                    if (dropped === 8) {
                        clearTimeout(watch);
                        document.getElementById("win").style.display = "block";
                        document.getElementById("backButton").style.display = "block";
                        return;
                    }
                    sec++;
                    if (sec >= 60) {
                        sec = 0;
                        min++;
                        if (min >= 60) {
                            min = 0;
                            hr++;
                        }
                    }
                    time.innerHTML = "hr:min:sec"+"<br>"+(hr > 9 ? hr : "0" + hr) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
                    startWatch();
                }

                function startWatch() {
                    watch = setTimeout(count, 1000);
                }

                startWatch();
            },
            demo: function demo() {
                document.getElementById("drops").style.display = "block";
                document.getElementById("drags").style.display = "block";
                document.getElementById("playButton").style.display = "none";
                document.getElementById("demoButton").style.display = "none";
                document.getElementById("all").style.cursor = "none";
                setTimeout(function () {
                    document.getElementById("dz1").appendChild(document.getElementById("p1"));
                    setTimeout(function () {
                        document.getElementById("dz2").appendChild(document.getElementById("p2"));
                        setTimeout(function () {
                            document.getElementById("dz3").appendChild(document.getElementById("p3"));
                            setTimeout(function () {
                                document.getElementById("dz4").appendChild(document.getElementById("p4"));
                                setTimeout(function () {
                                    document.getElementById("dz5").appendChild(document.getElementById("p5"));
                                    setTimeout(function () {
                                        document.getElementById("dz6").appendChild(document.getElementById("p6"));
                                        setTimeout(function () {
                                            document.getElementById("dz7").appendChild(document.getElementById("p7"));
                                            setTimeout(function () {
                                                document.getElementById("dz8").appendChild(document.getElementById("p8"));
                                                document.getElementById("backButton").style.display = "block";
                                                document.getElementById("all").style.cursor = "auto";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            },
            back: function back() {
                location.reload();
            }
        }
    }

</script>

<style scoped>
    h1 {
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    .con {
        position: relative;
        margin-left: 100px;
        margin-top:200px;
        display: none;
    }

    .draggables {
        position: relative;
        margin-left: 100px;
        margin-top: -100px;
        display: none;
    }

    #dz1 {
        background-image: url("imgHung/dropZone1.png");
        width: 122px;
        height: 140px;
        margin-left: 450px;
        margin-bottom: -391px;
    }

    #dz2 {
        background-image: url("imgHung/dropZone2.png");
        width: 250px;
        height: 250px;
        margin-left: 437px;
        margin-top: 58px;
    }

    #dz3 {
        background-image: url("imgHung/dropZone3.png");
        width: 250px;
        height: 250px;
        margin-left: 609px;
        margin-top: -241px;
    }

    #dz4 {
        background-image: url("imgHung/dropZone4.png");
        width: 250px;
        height: 250px;
        margin-left: 600px;
        margin-top: -124px;
    }

    #dz5 {
        background-image: url("imgHung/dropZone5.png");
        width: 250px;
        height: 250px;
        margin-left: 602px;
        margin-top: -138px;
    }

    #dz6 {
        background-image: url("imgHung/dropZone6.png");
        width: 250px;
        height: 250px;
        margin-left: 717px;
        margin-top: -485px;
    }

    #dz7 {
        background-image: url("imgHung/dropZone7.png");
        width: 250px;
        height: 250px;
        margin-left: 722px;
        margin-top: -130px;

    }

    #dz8 {
        background-image: url("imgHung/dropZone8.png");
        width: 250px;
        height: 250px;
        margin-left: 832px;
        margin-top: -139px;
    }

    .buttons {
        text-align: center;
    }

    .button {
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 5px;
        background-color: white;
        color: black;
        border: 2px solid #f44336;
    }

    .button:hover {
        background-color: #f44336;
        color: white;
    }

    #backButton {
        margin: auto;
        display: none;
    }

    #win {
        text-align: center;
        font-size: 16px;
        color: #f44336;
        font-weight: bold;
        display: none;
        margin-top: 50px;
    }
    #ti{
        margin-top: 50px;
    }
</style>