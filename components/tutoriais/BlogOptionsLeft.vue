<template>
<v-flex xs9 >
  <v-list>
    <v-btn class="pink white--text caption" flat >Mostrar Todos</v-btn>
    <v-subheader>Categorias</v-subheader>
    <v-list-tile v-for="item in items" :key="item.title">
      <v-list-tile-content>
        <v-list-tile-title class="body-1" v-html="item.title"></v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon :color="item.active ? 'blue' : 'grey'">{{item.icone}}</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-flex>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { active: true, title: 'Mais Populares', icone: 'mdi-star'},
          { active: true, title: 'Front-end', icone: ''},
          { active: true, title: 'Back-end', icone: ''},
          { title: 'Mobile', icone: ''},
          { title: 'DevOps', icone: ''},
          { title: 'Design', icone: ''},
          { title: 'Database', icone: ''},
          { title: 'API', icone: ''}
        ],
      }
    }
  }
</script>
<style scoped>
.v-list{
  padding: 0;
  margin-top: 10px;
}
.v-btn{
  border-radius: 50px;
}
.v-list__tile__title:hover{
  color: #E91E63;
}

</style>

