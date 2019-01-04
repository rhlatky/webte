<template>
    <div>
        <v-container grid-list-md fluid>
            <v-layout align-start justify-center row>
                <v-flex>
                    <v-card light>
                        <v-card-title class="text-xs-center"><h1>Dinh Profile</h1></v-card-title>
                        <!--<v-card-text><span>{{data.text.slice(0, 250)}} ... {{data.color}}</span></v-card-text>-->
                        <v-card-text>
                            <div id="skuska"></div>
                            <img src="./resources/imgProfiles/seen.jpg" alt=" Image not found">
                            <p>Volám sa Dinh Nguyen Tien. Priateľom a známym som to zjedodušil, volajú ma Dinhko (ale tu
                                v Bratislave sa
                                predstavujem už ako Dinh :D ).
                                Korene mám vo Vietname, ale narodil som sa v Bardejove, na osemročné gymnázium som
                                chodil do Prešova a na
                                teraz som zakotvil v Bratislave kvôli vysokej škole, ktorá ma celkom baví (Kappa).
                                Študujem aplikovanú informatiku na STU FEI. Vo voľnom čase sa venujem športu, keď ma
                                náhodou nebolí koleno
                                alebo kríže :D. To mi v poslednom čase dosť znepríjemňuje behanie a hranie futbalu.</p>

                            <p>Nepohrdnem ani chvíľami s priateľmi. S nimi trávim dosť voľného času. S tromi dokonca
                                zdieľam aj domácnosť.
                                Skvelé rozhodnutie - tú pohodu a slobodu by som určite za neustále internátne party
                                nemenil. V lete zvyknem
                                brigádovať a pomáhať aj rodičom.</p>

                            <p>
                                Myslím si, že je veľmi dôležité aby sa študenti snažili aspoň trochu zarobiť na vlastné
                                peniaze. Rozširuje to
                                obzory a mení aj charakter. Človek si zrazu oveľa viac váži to, čo vlastní.
                                Je viac vďačný a ohľaduplný.
                                Určite si v blízkej budúcnosti nájdem nejakú dobrú brigádu aj z môjho vlastného odboru.
                                Teraz sa však chcem
                                naplno venovať mojej bakalárskej práci.
                            </p>
                        </v-card-text>


                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import json from './resources/profiles';

    export default {
        name: "DinhProfile",
        mounted: function () {

            /*TODO: zistit ako sa iteruje, bo dajak nejde :D*/
            let text = json.profile2.text;
            let photo = document.createElement("img");
            photo.src = json.profile2.src;
            photo.alt = "wtf";
            document.getElementById("skuska").innerHTML = text;
            document.getElementById("skuska").prepend(photo);
            // window.alert(text);
        }
    }


</script>

<style scoped>
    img {
        width: 200px;
        margin: 0px 25px 0 0;
        float: left;
    }
</style>