<template>
  <div class="profile">
    <div class="client-container">
      <h1>Profielen</h1>

      <div class="legenda">
        <div class="legenda-info">
          <p>Naam</p>
          <div class="devider"></div>
          <p>Risico analyse</p>
          <div class="devider"></div>
          <p>Bewerken</p>
        </div>

      </div>
      <div class="client-list">
          <div class="client">
            <h4>Rick Jansen</h4>
            <div class="devider"></div>
            <p>Risico: 3.34%</p>
            <div class="devider"></div>
            <div class="button">Openen</div>
          </div>

          <div class="client">
            <h4>Dennis Wegereef</h4>
            <div class="devider"></div>
            <p>Risico: 0.67%</p>
            <div class="devider"></div>
            <div class="button">Openen</div>
          </div>

          <div class="client">
            <h4>Gijs Laarman</h4>
            <div class="devider"></div>
            <p>Risico: 1.52%</p>
            <div class="devider"></div>
            <div class="button">Openen</div>
          </div>

          <div class="client">
            <h4>800750F0</h4>
            <div class="devider"></div>
            <p>Risico: 3.34%</p>
            <div class="devider"></div>
            <div class="button">Openen</div>
          </div>

          <div class="client">
            <h4>800751F2</h4>
            <div class="devider"></div>
            <p>Risico: 1.78%</p>
            <div class="devider"></div>
            <div class="button">Openen</div>
          </div>





      </div>
    </div>
  </div>

</template>

<script>

</script>

<style lang="scss" scoped>

.client-container{
  padding: 1.5em;

  .legenda{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0em 1em;

    p{

      &:last-of-type{
        padding-right: 4em;
      }
    }

    .devider{
      height: 35px;
      width: 1px;
      background-color: #000;
    }

    .legenda-info{
      display: flex;
      justify-content: space-between;
    }
  }

  .client-list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5em;

    .client{
        background-color: #fff;
        color: #111111;
        padding: .5em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;

        .button{
          background-color: #E8B142;
          color: #fff;
        }


        .devider{
          height: 35px;
          width: 1px;
          background-color: #ededed;
        }
    }

  }


}



</style>
