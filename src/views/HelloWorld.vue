<template>
    <div class="mainCon">
        <div>
            <v-container grid-list-md fluid>
                <h1>Naša webstránka</h1>
                <v-layout align-start justify-center row>
                    <v-flex>
                        <p>Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným
                            výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a
                            pomiešal
                            ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a
                            pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov
                            Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker,
                            ktorý
                            obsahoval verzie Lorem Ipsum
                        </p>
                    </v-flex>
                    <img src="../assets/logo.png" alt="Image not found">
                    <img src="../assets/logo.svg" alt="Image not found">
                </v-layout>
            </v-container>

        </div>
        <table id="checklist">
            <caption><h2>Checklist</h2></caption>
            <tr>
                <th class="headers"></th>
                <th class="headers">Radoslav Hlatký</th>
                <th class="headers">Dinh Nguyen Tien</th>
                <th class="headers">Hung Tran Minh</th>
            </tr>
            <tr>
                <td class="headers">Trojúrovňové menu</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
            </tr>
            <tr>
                <td class="headers">Zobrazenie aktuálneho dátumu s meninami v daný deň</td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
            </tr>
            <tr>
                <td class="headers">Počítadlo osobných prístupov na stránku</td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
                <td class="checkMark">&#10004;</td>
            </tr>
            <tr>
                <td class="headers">Histórie prehliadania vo forme path-based breadcrumbs</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
            </tr>
            <tr>
                <td class="headers">Články v troch stĺpcoch vedľa seba</td>
                <td class="checkMark"></td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark"></td>
            </tr>
            <tr>
                <td class="headers">Individuálna úloha, hra</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark">&#10004;</td>
            </tr>
            <tr>
                <td class="headers">Kontakt na všetkých autorov</td>
                <td class="checkMark"></td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark"></td>
            </tr>
            <tr>
                <td class="headers">Checklist</td>
                <td class="checkMark"></td>
                <td class="checkMark"></td>
                <td class="checkMark">&#10004;</td>
            </tr>
            <tr>
                <td class="headers">Grafický návrh</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark">&#10004;</td>
                <td class="checkMark">&#10004;</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld"
    };
</script>

<style scoped>
    h1 {
        text-align: center;
        padding: 25px;
    }

    #checklist {
        border-collapse: collapse;
        margin: 0 auto 8% auto;
    }

    .headers {
        padding: 12px;
        text-align: left;
        background-color: #1976D2;
        color: white;
        font-weight: bold;
    }

    tr, td {
        border: 1px solid #d2d2d2;
        padding: 8px;

    }

    .checkMark {
        text-align: center;
        font-size: 21px;
        color: #52c556;
    }

    tr:nth-child(even) {
        background-color: #eaeaea;
    }

    caption {
        caption-side: top;
        background-color: #1E88E5;
        text-align: center;
        color: white;
    }

    img {
        width: 10%;
        /*height: 200px;*/
        margin: 0px 25px 0 0;
        /*float: left;*/
    }


</style>
