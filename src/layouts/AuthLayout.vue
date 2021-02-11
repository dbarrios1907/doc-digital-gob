<template>
  <v-app>
    <VerticaLayout>
      <template v-slot:header>
        <Header />
      </template>

      <template v-slot:nav>
        <Navigation v-model="drawer" :routes="items" />
      </template>

      <Navigation routes="items" />

      <template v-slot:main>
        <v-main>
          <router-view />
        </v-main>
      </template>

      <template v-slot:footer>
        <Footer color="white" />
      </template>
    </VerticaLayout>
  </v-app>
</template>
<script>
import VerticaLayout from './VerticalLayout'
import Navigation from './components/navigation'
export default {
  name: 'DxAuthLayout',
  components: {
    VerticaLayout,
    Navigation,
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Usuarios', icon: 'mdi-account-supervisor-circle' },
        { title: 'Documentos', icon: 'mdi-file-multiple' },
        { title: 'Oficina de Partes', icon: 'mdi-bank' },
      ],
      right: null,
      open: [1, 2],
      tree: null,
      caseSensitive: false,
    }
  },
}
</script>
