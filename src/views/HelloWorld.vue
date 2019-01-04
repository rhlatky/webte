<template>
    <div class="mainCon">
        <div>
            <v-container grid-list-md fluid>
                <h1>Naša webstránka</h1>
                <v-layout align-start justify-center row>
                    <v-flex md8>
                        <p>Vitajte na našej webovej stránke, ktorá bola vytvorená za účelom dokončenia projektu z
                            webových technológii (WEBTECH1). V priebehu semestra sme sa oboznámili so základnými
                            vedomosťami z tvorby webových stránok. A táto stránka je našim aj vašim výsledkom.
                            Na jej tvorbe sa venovali všetci členovia nášho tímu -
                            Radoslav Hlatký, Dinh Nguyen Tien, Hung Tran Minh.
                            Využivali sme Vuejs, google a stackoverflow. Táto stránka (okrem hier) je kompatibilná
                            aj s mobilnými zariadeniami. V nižšie uvedenej tabuľke je menovite zaznamenané, ktorý člen
                            tímu pracoval na akej úlohe.
                        </p>
                    </v-flex>
                </v-layout>
                <v-layout align-start justify-center row>
                    <img src="../assets/logo.png" alt="Image not found">
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
        width: 5%;
        /*height: 200px;*/
        margin: 0px 25px 0 0;
        /*float: left;*/
    }


</style>
