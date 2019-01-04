<template>
  <div class="mainCon">
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
  #checklist{
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
  tr:nth-child(even){
    background-color: #eaeaea;
  }
  caption {
    caption-side: top;
    background-color: #1E88E5;
    text-align: center;
    color: white;
  }
</style>
