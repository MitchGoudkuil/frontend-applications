<template>
    <div class="home">

      <div class="recently-opened">
        <div class="white tile">
          <h1>Hallo {{username}}, deze profielen heeft u onlangs geopend.</h1>
        </div>
        <div class="opened-tile">
          <div class="profile white tile">
            <h2>Luna May</h2>
            <p>Risico: 4.20%</p>
            <p class="small">Laatst bijgewerkt: Gisteren</p>
            <div class="open-button button">
              Openen
            </div>
          </div>


        </div>

      </div>
      <div class="to-complete tile">
        <h3>Deze profielen hebben een hoog risico!</h3>

        <div class="risk-profiles">
          <div class="profile white padding">
            <h2>Luna May</h2>
            <p>Risico: 4.20%</p>
            <p class="small">Laatst bijgewerkt: Maart 14 2018</p>
            <div class="open-button button">
              Openen
            </div>
          </div>
        </div>

      </div>
      <div class="introduction tile">

        <h3>Introductie</h3>
        <p>
  Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.

  In het menu vindt u onder 'Risico indicatie' de objectieve risico indicatie tool op een zware maatregel op basis van kenmerken. Daarnaast vindt u onder 'Trajectkeuze' een tool om op basis van eerdere trajecten de kans te vekrijgen op een volgend traject op basis van historische gegevens.

  Voor hulp bij het gebruik van deze tool, kunt u gebruik maken van de handleiding die u hier kunt downloaden:</p>
      </div>

    </div>
</template>

<script>
export default {
    name: 'home',
    props: ['username'],
    methods: {
  },
  mounted() {
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.home{
  padding: 1.5em;
  column-gap: 1em;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;

  .introduction{
  background-color: #fff;

    p{

    }
  }

  .padding{
    padding: 1.5em;
  }

  .to-complete{
    background-color: #272F52;

    h3{
      color: #fff;
    }

    .risk-profiles{
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;

      .open-button{
        background-color: #E8B142;
        color: #fff;
        position: absolute;
        bottom: -1.5em;
        margin-left: 10%;

      }
      .small{
        font-size: 13px;
        color: #777;
        padding-bottom: 1em;
      }
    }
  }

  .opened-tile{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    position: relative;
    width: 100%;

    .profile{
      margin-top: 1em;
    }

    .small{
      font-size: 13px;
      color: #777;
      padding-bottom: 1em;
    }
    .open-button{
      background-color: #E8B142;
      color: #fff;
      position: absolute;
      bottom: -1.5em;
      margin-left: 10%;

    }

  }





}


</style>
