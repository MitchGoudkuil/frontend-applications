<template>
  <div class="risico-container">
    <div class="profile-container">
        <div class="profile-tile">
          <h1>Risico indicatie</h1>
          <div class="result">
            <h3>0.078%</h3>
          </div>

          <p><strong>Gebruiksaanwijzing</strong><p>
            <p>Vul alle vragen in door de juiste opties te selecteren en druk vervolgens op "Geef risico indicatie" om een risico indicatie te krijgen.</p>
            <a src="/" class="save-button button">
              Opslaan
            </a>
        </div>
    </div>
    <div class="question-container">
      <div class="question-tile">
        <p>Persoonsgegevens</p>
        <div class="filled-in">
          hey

        </div>
        <div v-for="data in myJson">{{ data }}</div>
      </div>
    </div>
  </div>

</template>

<script>

import json from '../json/data.json'
     export default{
         data(){
             return{
                 myJson: json
             }
         }
     }

</script>

<style lang="scss" scoped>

.risico-container{
  display: grid;
  grid-template-columns: 1fr 3fr;

    .profile-container{
      padding: 1.5em;
      list-style-type: none;
      width: 100%;


      .profile-tile{
        background-color: #fff;
        padding: 1em 1em 3em;
        position: relative;
      }

      .save-button{
        position: absolute;
        bottom: 0;
        background-color: orange;
        color: #fff;
      }
    }

    .question-container{
      padding: 1.5em;

      .question-tile{
        background-color: #fff;
        display: flex;
        border-left: 20px solid green;
        text-align: center;

      }

    }
}




</style>
