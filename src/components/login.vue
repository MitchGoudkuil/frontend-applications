<template>
  <div class="login-screen">
    <div class="login-block">
      <div class="login-content">
        <h1>Kind Veilig Thuis</h1>
        <label>Naam</label>
        <input type="text" name="" value="" v-model="inlog">
        <label>Wachtwoord</label>
        <input type="password" name="" value="" v-model="password">
        <p class="errormessage">{{ error }}</p>
        <a class="login-button button" @click="goToHome">Naar home</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      inlog: null,
      password: null,
      error: null
    }
  },
  props: ['name'],
  methods: {
    goToHome: function() {

    if (this.inlog && this.password) {
      // DE EMITTER IS DE KOPPELING TUSSEN  DE PARENT EN CHILD om name en login te kunnen gebruiken.
      this.$emit('handleLogin', {
        name: this.inlog,
        login: false
      })
    } else {
      this.$data.error = "Niet alle velden zijn ingevuld"
    }
  }
},
mounted() {

}
}
</script>

<style lang="scss" scoped>

.login-screen{
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-image: url(../assets/kidandmom.jpg);
  background-position: center;
  background-size: cover;
}

.login-content{
  margin-top: 50%;
}


  .login-block{
    background-color: #fff;
    color: #000;
    height: 100vh;
    width: 30vw;
    padding: 2em 5em;

    h1{
      border-bottom: 1px solid #ececec;
      padding-bottom: 1em;
    }

    label{
      display: block;
      margin-bottom: .2em
    }

    input{
      margin-bottom: 2em;
    }

    .errormessage{
      color: red;
    }

    .login-button{
      display: block;
      margin-top: 1em;
      border: none;
      background-color: #E8B142;
      color: #fff;
      cursor: pointer;

    }

  }

  span {
    cursor: pointer;
  }



</style>
