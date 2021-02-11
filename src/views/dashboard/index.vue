<template>
  <v-container class="px-10 pr-8">
    <dx-bodytitle
      title="Estás en el Módulo de Administración"
      subtitle="Aquí podrás crear o modificar usuarios y revisar los documentos que se tramitan en tu Institución."
    />
    <v-container class="px-0 mt-15">
      <dx-dashboard />
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>
