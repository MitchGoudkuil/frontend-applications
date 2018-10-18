<template>
  <div id="app">
    <div v-if="inlog">
      <login name="Nog geen naam" @handleLogin="fromParentLogin"/>
    </div>
    <div v-else>
        <div id="app-container">
          <div id="side-bar">
            <div class="intro-container">
              <img src="./assets/mitch-wit.jpg" alt="">
              <p>Hallo, {{ username }}</p>
            </div>

            <nav id="main-nav">
              <ul>
                <router-link to="/"><li>Home</li></router-link>
                  <router-link to="/risico"><li>Risico analyse</li></router-link>
                    <router-link to="/profile"><li>Profielen</li></router-link>
                <li>Traject keuze</li>
                <li>Over</li>
                <li>Contact</li>
              </ul>
            </nav>

            <router-link to="/profile">
              <div class="logout">
                  <img src="./assets/off.png" alt="">
                  <p>Logout</p>
              </div>
            </router-link>

          </div>
          <div>

          </div>
          <div id="content-container">
            <router-view :username="username"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import skills from './components/skills.vue'
import login from './components/login.vue'

export default {
  name: 'app',
  components: {
    skills,
    login
  },
  data() {
      return {
        inlog: true,
        username: 'Empty'
      }
  },
  mounted() {
    this.$data.inlog = false
  },
  methods: {
    fromParentLogin (value) {
      this.$data.inlog = value.login
      this.$data.username = value.name
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');

*{
box-sizing: border-box;
}

body {
  background-color: #efefef;
  font-family:  'Roboto', sans-serif;

}

p{ font-family:  'Roboto', sans-serif;}

h1,h2,h3,h4,h5{
  font-family: 'Fira Sans', sans-serif;
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

.white{
  background-color: #fff;
}

.tile{
  padding: 1.5em;
  -webkit-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
-moz-box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
box-shadow: 9px 14px 49px -11px rgba(201,201,201,1);
}

.button{
  padding: 1em 3em;
  text-align: center;
}



#app-container{
  display: grid;
  grid-template-columns: 2fr 10fr;


}

.bold{
  font-weight: 600;
}

input[type=text], input[type=password]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

select {
  max-width: 20em ;
  width: 100%;
  margin: 8px 0;
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid #ccc;
}

#side-bar{
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0C0F21;
  font-weight: 100;
  position: fixed;


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

    .logout{
      position: absolute;
      bottom: 0;
    }

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
  .logout{
    color: #ffffff;
    position: absolute;
    bottom: 1em;
    left: 2em;
    display: flex;
    align-items: center;

    p{
      margin-left: 1em;
    }

    img{
      border-radius: 10em;
      width: 2.5em;
      height: 2.5em;

    }
  }

}

</style>
