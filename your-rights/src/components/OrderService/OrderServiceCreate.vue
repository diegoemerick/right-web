<template>
<div id="createOrderForm">
    
    <div class="text-xs-center mt-4">
      <v-btn round color="primary" @click="showForm()">Nova Ordem de Serviço</v-btn>
    </div>

  <v-layout row justify-center> 
    <v-dialog v-model="dialog" 
              persistent 
              max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Nova Ordem de Serviço</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Titulo" v-model='form.title' required></v-text-field>
              </v-flex>
              <v-flex xs12>
                 <v-text-field
                    name="input-7-2"
                    label="Descrição"
                    class="input-group"
                    v-model='form.description'
                    multi-line></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Fechar</v-btn>
          <v-btn color="blue darken-1" flat @click="sendNewOrder()">Criar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</div>
</template>

<script>
import axios from 'axios';

  export default {
    data () {
      return {
        dialog: false,
        form: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      showForm: function() {
        this.dialog = true;
      },
      hideForm: function() {
        this.dialog = false;
      },
      sendNewOrder: function() {
        axios.post(URL + '/order', this.form)
        .then(response => {
            console.log('response', response.data);
        }).catch(e => {

        });
      }
    }
  }
</script>