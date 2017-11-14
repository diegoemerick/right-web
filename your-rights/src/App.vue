<template>
  <v-app id="inspire" light>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Seus Direitos</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid >
          <router-view />
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; Seus Direitos. 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({}),
    props: {}
  }
</script>