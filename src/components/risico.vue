<template>
  <div class="risico-container">
    <div class="profile-container">
        <div class="tile profile-tile">
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
        <div v-for="data in filterCategories">
          <div @click="stateChange(data)" class="tile question-tile" :style="{ borderLeft: `10px solid ${data.Kleur}`}">

        <div class="upper-part">
            <p>{{ data }}</p>
            <div class="filled-in">
                <p>0%</p>
            </div>
        </div>

        <div class="lower-part">
            <div v-if="data == currentCatagory" >
              <select class="" name="">
                <option v-for="item in currentOption" >{{ item.Name }}</option>
              </select>
            </div>
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
             }
         },
         components: {
           skills,
         },
         computed: {

           filterCategories: function() {
             let categoryNames = []
             const categories = this.myJson.map((category, Kleur) => category.Categorie)
             .filter((categorie, index, all) => {
               if (all.indexOf(categorie) == index) {
                 categoryNames.push(categorie)
               }
             })
             console.log(categoryNames)

             return categoryNames
           }

         },
         methods: {
           stateChange: function(categorie){
             this.currentCatagory = categorie
             this.currentOption = Object.values(this.addItemsToCategories(this.currentCatagory))

             // for(let item in selectedItem) {
             //   console.log(selectedItem[])
             // }
             // for (let i = 0; 1 < selectedItem.length; i++) {
             //   console.log(selectedItem[i])
             // }

         },

         // find index by change
         addItemsToCategories: function(subject) {
           const categories = this.filterCategories
           let newArray = []
           const filteredItems = this.myJson.map(category => category)
           .filter(item => item.Categorie == subject)
           return filteredItems
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
        bottom: -1.5em;
        background-color: orange;
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
          }
      }
   }
}




</style>
