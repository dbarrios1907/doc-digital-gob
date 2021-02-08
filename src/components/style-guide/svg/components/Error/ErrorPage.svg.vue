<template>
  <div v-bind="$attrs" v-on="$listeners" class="errorpage">
    <Error />
    <div class="content">
      <span class="span"> Lo sentimos, hemos tenido un problema</span>
      <dx-button color="primary" v-bind="$props"> Vuelve a intentarlo</dx-button>
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
      width: auto !important;
    }
    .errorpage .content {
      top: 6rem !important;  
      right: 3rem !important;
      width: 290px !important;
    }

    .errorpage .content .v-btn {
      min-width: 100% !important;
    }

    .errorpage .link {
      bottom: 20px !important;
      right: 31px !important;
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
    right: 5rem;
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