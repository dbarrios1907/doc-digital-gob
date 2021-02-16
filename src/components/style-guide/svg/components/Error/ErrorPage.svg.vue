<template>
  <div v-bind="$attrs" v-on="$listeners" class="errorpage">
    <Error />
    <div class="content">
      <div class="mb-3 span darken3--text font-robotoslab"> Lo sentimos,</div>
      <div class="span darken3--text font-robotoslab"> hemos tenido un problema</div>
      <dx-button color="primary" class="text-underline"> Vuelve a intentarlo</dx-button>
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
    top: 8rem;
    right: 10rem;
    width: 316px;
  }

  .errorpage .content .span {
    display: block;
    font-size: 25px;
    font-weight: 700;
    line-height: 32px;
  }

  .errorpage .content .v-btn {
    margin: 35px 0 30px;
  }

  .errorpage .link {
    position: absolute;
    bottom: 103px;
    text-align: center;
    right: 7rem;
    line-height: 30px;
  }
</style>
