<template>
  <div v-bind="$attrs" v-on="$listeners" class="errorpage">
    <Error />
    <div class="content">
      <span class="span darken3--text"> Lo sentimos, hemos tenido un problema</span>
      <dx-button color="primary"> Vuelve a intentarlo</dx-button>
    </div>
    <span class="link">Si no funciona escríbenos en <a href="https://digital.gob.cl/incidencia">https://digital.gob.cl/incidencia</a> </span>
  </div>
</template>
<script>
import Error from '../Error/Error.svg'
export default {
  name: 'ErrorPage',
  components: {
    Error,
  },
  props: {
    color: String,
    width: {
      type: Number,
      default: 201,
    },
    height: {
      type: Number,
      default: 40,
    },
  },
}
</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .errorpage {
      width: auto;
    }
    .errorpage .content {
      top: 6rem ;
      right: 3rem;
      width: 290px;
    }

    .errorpage .content .v-btn {
      min-width: 100%;
    }

    .errorpage .link {
      bottom: 20px;
      right: 31px;
      width: 226px;
    }
  }
  .errorpage {
    position: relative;
    margin: auto;
    width: 799px;
  }

  .errorpage .content {
    position: absolute;
    text-align: center;
    top: 12rem;
    right: 6.2rem;
    width: 472px;
  }

  .errorpage .content .span {
    display: block;
    font-size: 25px;
    font-weight: 700;
    line-height: 32px;
  }

  .errorpage .content .v-btn {
    margin: 37px 0 30px;
  }

  .errorpage .link {
    position: absolute;
    bottom: 60px;
    text-align: center;
    right: 7rem;
    line-height: 30px;
  }
</style>
