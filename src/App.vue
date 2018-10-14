<template>
  <div id="app">
    <div id="side-bar">
      <nav id="main-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/risico">About</router-link></li>
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
// import risico from './components/risico.vue'

export default {
  name: 'app',
  components: {
    skills,
    // risico
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');


*{
box-sizing: border-box;
}

body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: flex;
}
body, html {
  margin: 0;
  height: 100%;
}

ul{
  list-style-type: none;
  color: #fff;
}

a{
  color: #fff;
}

#side-bar{
  position: fixed;
  width: 15vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #003366;
  display: flex;
  align-content: center;
}

#content-container{
  position: absolute;
  right: 0;
  width: 85vw;
}


</style>
