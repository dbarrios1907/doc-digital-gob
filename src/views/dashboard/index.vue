<template>
  <div>
    <dx-bodytitle>
      <template v-slot:title>
        <div class="weight-700 text-md-h4 mt-3 line-height-31">Estás en el Módulo de Administración</div>
      </template>
      <template v-slot:subtitle>
        <div class="weight-400 mt-4 font-16">Aquí podrás crear o modificar usuarios y revisar los documentos que se tramitan en tu Institución.</div>
      </template>
    </dx-bodytitle>
    <v-container class="px-0 mt-15">
      <dx-dashboard />
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>
