<template>
  <div class="hello">
    <div class="notition-title">
      <h3>Extra Notities</h3>
    </div>
    <div class="holder">
      <form @submit.prevent="addSkill">
          <input type="text" name="" value="" placeholder="Schrijf hier uw notitie" v-model="skill">
      </form>
      <ul>
        <li v-for="(data, index) in skills" :key="index">
            {{data.skill}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data() {
    return {
      skill: '',
    skills: [
    ],
  }

},

methods: {
  addSkill(){
    this.skills.push({skill: this.skill})
    this.skill = '';
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.holder {
    background: #fff;
  }

  .notition-title{
    background-color: #0C0F21;
    color: #fff;
    padding: 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: .9em;
    background-color: #fff;
    color: #3E5252;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: #A5ADD7!important;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0!important;
    padding: 20px;
    font-size: 1.3em;
    background-color: #272F52;
    color: #A5ADD7!important;
    border-radius: 0!important;
    margin: 0!important;
  }

</style>
