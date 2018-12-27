<template>
    <div id="mainContainer">
        <h1>Dinh Nguyen Tien Game 111111a</h1>

        <div class="con" id="drops">
            <div id="map-Antananarivo" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="map-Antisiranana" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="map-Fianarantsoa" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="map-Mahajanga" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="map-Toamasin" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="map-Toliara" v-on:drop="drop" v-on:dragover="allowDrop"></div>

        </div>

        <div>
            <div id="flag-green" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="flag-white" v-on:drop="drop" v-on:dragover="allowDrop"></div>
            <div id="flag-red" v-on:drop="drop" v-on:dragover="allowDrop"></div>
        </div>

    </div>


</template>

<script>
    export default {
        name: "gameDinh"
    }
</script>

<style scoped>
    #map-Antananarivo {
        background-image: url("imgDinh/AntananarivoBlank.png");
        width: 110px;
        height: 110px;
        margin-left: 572px;
        margin-top: 48px;
        /*border: 2px solid pink;*/
    }

    #map-Antisiranana {
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 661px;
        margin-top: -348px;
        /*border: 2px solid red;*/
    }

    #map-Antisiranana {
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 662px;
        margin-top: -348px;
        /*border: 2px solid red;*/
    }

    #map-Fianarantsoa {
        background-image: url("imgDinh/FianarantsoaBlank.png");
        width: 150px;
        height: 180px;
        margin-left: 553px;
        margin-top: 148px;
        /*border: 2px solid red;*/
    }

    #map-Mahajanga{
        background-image: url("imgDinh/MahajangaBlank.png");
        width: 230px;
        height: 228px;
        margin-left: 512px;
        margin-top: -425px;
        /*border: 2px solid red;*/
    }

    #map-Toamasin{
        background-image: url("imgDinh/ToamasinaBlank.png");
        width: 100px;
        height: 250px;
        margin-left: 655px;
        margin-top: -191px;
        /*border: 2px solid red;*/
    }

    #map-Toliara{
        background-image: url("imgDinh/ToliaraBlank.png");
        width: 180px;
        height: 310px;
        margin-left: 485px;
        margin-top: -110px;
        /*border: 2px solid red;*/
    }

    #flag-white{
        background-image: url("imgDinh/flag1Blank.png");
        width: 180px;
        height: 310px;
        margin-left: 600px;
        margin-top: 0px;
        border: 2px solid red;
    }

    /*#map-part69 {*/
        /*background-image: url("imgDinh/Blank.png");*/
        /*width: 500px;*/
        /*height: 600px;*/
        /*margin-left: 450px;*/
        /*margin-bottom: -391px;*/
        /*border: 2px solid #f44336;*/
    /*}*/
</style>