<template>
<v-layout>
  <v-flex xs12 sm6 offset-sm3>
      <v-card class="pa-4">
        <div class="text-xs-center">
          <img src="src/assets/img/logo.png"></v-card-media>
        </div>
        <div class="text-xs-center mt-4">
            <v-btn color="primary" @click="getCompany()">Empresa</v-btn>
            <v-btn color="primary" @click="getLawyers()">Advogado</v-btn>
        </div>
        <v-form class="pt-3">      
            <v-select
                v-if="access"
                v-model="accessSession"
                v-bind:items="access"
                item-text="name"
                autocomplete
                single-line
                required></v-select>
        </v-form>
        <div class="text-xs-center mt-4">
            <v-btn color="primary" @click="login()">ACESSAR</v-btn>
        </div>
      </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import axios from 'axios';
import Router from 'vue-router'

export default {
    data () {
      return {
        typeAccess: null,
        access: [],
        accessSession: null,
        select: null
      }
    },
    methods: {
      submit () {
        this.$validator.validateAll()
      },
      getCompany() {
         axios.get(URL + '/company')
            .then(response => {
            this.typeAccess = 'company',
            this.access = response.data
        }).catch(e => {});
      },
      getLawyers() {
        axios.get(URL + '/lawyer')
            .then(response => {
            this.typeAccess = 'lawyer',
            this.access = response.data
        }).catch(e => {});
      },
      clear() {
        this.select = null;
        this.$validator.clean();
      },
      login() {
        localStorage.setItem('type', this.typeAccess);
        localStorage.setItem('access', JSON.stringify(this.accessSession));
      }
    }

  }
</script>