<template>
  <div id="app">
    <div id="side-bar">
      <div class="intro-container">
        <img src="./assets/mitch-wit.jpg" alt="">
        <p>Hallo Mitch</p>


      </div>

      <nav id="main-nav">
        <ul>
          <router-link to="/"><li>Home</li></router-link>
            <router-link to="/risico"><li>Risico indicatie</li></router-link>
              <router-link to="/profile"><li>Profielen</li></router-link>
          <li>Traject keuze</li>
          <li>Over</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
    <div id="content-container">
      <router-view />
    </div>


  </div>
</template>

<script>
import skills from './components/skills.vue'

export default {
  name: 'app',
  components: {
    skills,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

*{
box-sizing: border-box;
}

body {
  background-color: #efefef;
  font-family:  'Roboto', sans-serif;
}

body, html {
  margin: 0;
  height: 100%;
}

ul{
  list-style-type: none;
  color: #fff;
  padding: 0;
}

a{
  text-decoration: none;
}

.button{
  padding: 1em 3em;
  text-align: center;
}


#app{
  display: grid;
  grid-template-columns: 2fr 10fr;

}

#side-bar{
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0C0F21;
  font-weight: 100;

  a{
    color: #fff;
  }

  .intro-container{
    display: flex;
    align-items: center;
    padding: 1em 2em;

    img{
      width: 2.5em;
      height: 2.5em;
      border-radius: 5em;
      background-color: #fff;

    }

    p{
      margin-left: 1em;
      color: #fff;
    }

  }

  .active{
    background-color: green;
    padding: 1em;
  }

  ul{
    width: 100%;

    li{
      padding: 1em 2em;

      &:hover{
        background-color: #272F52;
      }
    }
  }

}

.active {
  color: red!important;
}

</style>
