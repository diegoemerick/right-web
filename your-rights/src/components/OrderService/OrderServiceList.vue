<template>
<div id="listTable">
    <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-center">{{ props.item.title }}</td>
      <td class="text-xs-center">{{ props.item.company }}</td>
      <td class="text-xs-center">{{ props.item.status }}</td>
      <td>
        <div class="text-xs-center">
         <v-layout row wrap>
          <v-flex xs2>
            <v-btn flat icon color="green">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-flex>
           <v-flex xs2>
            <v-btn flat icon color="blue-grey">
              <v-icon>list</v-icon>
            </v-btn>
          </v-flex>
           <v-flex xs2>
            <v-btn flat icon color="cyan">
              <v-icon>search</v-icon>
            </v-btn>
          </v-flex>          
         </v-layout>
        </div>
      </td>
    </template>
    </v-data-table>
</div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { 
              text: 'Titulo', 
              align: 'center', 
              value: 'title'
              },{ 
              text: 'Empresa', 
              align: 'center', 
              value: 'company' 
              },{ 
              text: 'Status', 
              align: 'center', 
              value: 'status' 
              },{ 
              text: 'Ações', 
              align: 'center', 
              value: 'action' 
              },
              
        ],
        items: [
          {
            title: 'Nova Ordem de Serviço',
            company: 'Frozen Yogurt',
            status: 'Disponivel',
            id: 1
          },
           {
            title: 'Nova Ordem de Serviço',
            company: 'Frozen Yogurt',
            status: 'Disponivel',
            id: 2
          },
           {
            title: 'Nova Ordem de Serviço',
            company: 'Frozen Yogurt',
            status: 'Disponivel',
            id: 3
          },
           {
            title: 'Nova Ordem de Serviço',
            company: 'Frozen Yogurt',
            status: 'Disponivel',
            id: 4
          }
        ]
      }
    }
  }
</script>