<template>
    <div id="mainContainer">
        <h1>Dinh Nguyen Tien Game 111111a</h1>

        <div class="con" id="map">
            <div id="map-Antananarivo"></div>
            <div id="map-Antisiranana"></div>
            <div id="map-Fianarantsoa"></div>
            <div id="map-Mahajanga"></div>
            <div id="map-Toamasin"></div>
            <div id="map-Toliara"></div
            >
        </div>

        <div id="flag">
            <div id="flag-white"></div>
            <div id="flag-red"></div>
            <div id="flag-green"></div>

        </div>

        <div >
            <div id="flag-white-drag">aaaaa</div>
            <div id="flag-red-drag">aaa aa</div>
            <div id="flag-green-drag">asvasv</div>
            <div id="map-Antananarivo-drag">asf asf </div>
            <div id="map-Antisiranana-drag">fas f as</div>
            <div id="map-Fianarantsoa-drag">f asf asf asf</div>
            <div id="map-Mahajanga-drag"> fsdga d a</div>
            <div id="map-Toamasin-drag">ag as </div>
            <div id="map-Toliara-drag">a fas </div>

        </div>

    </div>


</template>

<script>
    export default {
        name: "gameDinh"
    }
</script>

<style scoped>

    #map{
        /*margin-left: 572px;*/
        margin-top: 200px;
        /*border: 2px solid pink;*/
    }


    #map-Antananarivo {
        position: static;
        background-image: url("imgDinh/AntananarivoBlank.png");
        width: 110px;
        height: 110px;
        margin-left: 572px;
        margin-top: 48px;
        /*border: 2px solid pink;*/
    }

    #map-Antisiranana {
        position: static;
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 661px;
        margin-top: -348px;
        /*border: 2px solid red;*/
    }

    #map-Antisiranana {
        position: static;
        background-image: url("imgDinh/antisirananaBlank.png");
        width: 110px;
        height: 180px;
        margin-left: 662px;
        margin-top: -348px;
        /*border: 2px solid red;*/
    }

    #map-Fianarantsoa {
        position: static;
        background-image: url("imgDinh/FianarantsoaBlank.png");
        width: 150px;
        height: 180px;
        margin-left: 553px;
        margin-top: 148px;
        /*border: 2px solid red;*/
    }

    #map-Mahajanga{
        position: static;
        background-image: url("imgDinh/MahajangaBlank.png");
        width: 230px;
        height: 228px;
        margin-left: 512px;
        margin-top: -425px;
        /*border: 2px solid red;*/
    }

    #map-Toamasin{
        position: static;
        background-image: url("imgDinh/ToamasinaBlank.png");
        width: 100px;
        height: 250px;
        margin-left: 655px;
        margin-top: -191px;
        /*border: 2px solid red;*/
    }

    #map-Toliara{
        position: static;
        background-image: url("imgDinh/ToliaraBlank.png");
        width: 180px;
        height: 310px;
        margin-left: 485px;
        margin-top: -110px;
        /*border: 2px solid red;*/
    }

    #flag{
        position: relative;
        /*border: 2px solid red;*/
        margin-left: 250px;
        margin-top: -250px;
    }
    #flag-white{
        position: static;

        background-image: url("imgDinh/flag1Blankrs.png");
        width: 95px;
        height: 185px;
        margin-left: 611px;
        margin-top: -98px;
        /*border: 2px solid blue;*/
    }

    #flag-red{
        position: static;
        background-image: url("imgDinh/flag2Blankrs.png");
        width: 185px;
        height: 95px;
        margin-left: 700px;
        margin-top: -185px;
        /*border: 2px solid red;*/
    }

    #flag-green{
        position: static;
        background-image: url("imgDinh/flag3Blankrs.png");
        width: 185px;
        height: 95px;
        margin-left: 700px;
        margin-top: -6px;
        /*border: 2px solid green;*/
    }

    /*#map-part69 {*/
        /*position: fixed;*/
        /*background-image: url("imgDinh/Blank.png");*/
        /*width: 500px;*/
        /*height: 600px;*/
        /*margin-left: 450px;*/
        /*margin-bottom: -391px;*/
        /*border: 2px solid #f44336;*/
    /*}*/
</style>