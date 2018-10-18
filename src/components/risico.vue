<template>
  <div class="risico-container">
    <div class="profile-container">
        <div class="tile profile-tile">
          <h1>Risico analyse</h1>
          <div class="result">
            <h3 id="a-result"></h3>
          </div>

          <p class="bold">Gebruiksaanwijzing<p>
            <p>Vul alle vragen in door de juiste opties te selecteren en druk vervolgens op "Geef risico indicatie" om een risico indicatie te krijgen.</p>
            <a src="/" class="save-button button">
              Opslaan
            </a>
        </div>

    </div>

    <div class="question-container">
        <div v-for="category in filterCategories">
          <div @click="stateChange(category)" class="tile question-tile">
            <!-- <button @click="logThis" type="button" name="button"></button> -->
        <div class="upper-part">
            <p>{{ category }}</p>
            <div class="filled-in">
                <p>{{ filledIn}}%</p>
                <p></p>
            </div>
        </div>

        <div class="lower-part">
            <form class="" action="index.html" method="post">
              <div class="question-divided" v-if="category == currentCatagory" >
                <label v-for="item in currentOption">{{ item.Vraag}}
                  <select name="" @change="handleValue" :data-id="item.id">
                    <option disabled selected>Selecteer ieksss</option>
                    <option v-for="answer in item.Opties" :value="answer.Gewicht" >{{ answer.Antwoord }}</option>
                  </select>
                </label>

              </div>
            </form>
          </div>
        </div>
      </div>
      <skills />
    </div>

  </div>

</template>

<script>

import json from '../json/data.json'
import skills from '../components/skills.vue'

     export default{
         data(){
             return{
                 myJson: json,
                 currentCatagory: '',
                 currentOption: [],
                 filledIn : "0",
                 borderStyle: "",
                 questionSet: [],
                 weight: new Object(),

                 colors: [
                  "#63B324",
                  "#2380F5",
                  "#1D0EB0",
                  "#CC58C2",
                  "#58118D",
                ],
                risk: 0,

             }
         },
         components: {
           skills,
         },
         computed: {

           filterCategories: function() {
             let categoryNames = []
             const categories = this.myJson.map((category) => category.Categorie)
             .filter((categorie, index, all) => {
               if (all.indexOf(categorie) == index) {
                 categoryNames.push(categorie)
               }
             })
             console.log(categoryNames)

             return categoryNames
          },
         },
         methods: {

           handleValue: function(e){
             var targetId = e.target.getAttribute("data-id");
             this.weight[targetId] = e.target.value;
             var valueArrays = Object.values(this.weight);
             var calc = calculated(valueArrays);
             var calcResult = document.querySelector("#a-result");

             calcResult.textContent = calc + "%"

             function calculated(valueArrays){
        var sum = valueArrays.reduce(function(totaal, currentValue){
          return Number(totaal) + Number(currentValue)
        }, 0)
        return Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + sum ) ) ) * 100 ).toFixed( 2 ) )
      }

    },


           setFilledIn: function(){
             if (this.filledIn == "0"){
               this.filledIn = "100";
             }

           },
           stateChange: function(categorie){
             this.currentCatagory = categorie
             this.currentOption = Object.values(this.addItemsToCategories(this.currentCatagory))

         },

           // find index by change
           addItemsToCategories: function(subject) {
             const categories = this.filterCategories
             let newArray = []
             const filteredItems = this.myJson.map(category => category)
             .filter(item => item.Categorie == subject)
             return filteredItems
           },
         }
     };


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
        bottom: -1.5em;
        margin-left: 50%;
        left: -77px;

        background-color: #E8B142;
        color: #fff;
      }
    }

    .question-container{
        padding: 1.5em;



      .question-tile{
        background-color: #fff;
        text-align: center;
        margin-bottom: 1em;
        width: 100%;
        position: relative;
        border-left: 20px solid;
        transition: all .2s ease-in-out;

        &:hover{
          transform: scale(1.02);
        }

          .upper-part{
            display: flex;
            text-align: center;
            border-bottom: .1em solid #ececec;

            p{
              margin-left: 1em;
            }

            .filled-in{
              position: absolute;
              right: 1em;
            }
          }

          .lower-part{
            padding: 1em;
            display: block;
            margin: 0 auto;


            .question-divided{
              display: grid;
              grid-template-columns: 1fr 1fr;
              text-align: left;

              select{
                display: block;
                width: 100%;
              }


              label{
                display: block;

              }
            }
          }
      }
   }
}




</style>
