<template>
<v-flex xs9 >
<v-list subheader>
  <v-subheader>Categorias</v-subheader>
  <v-list-tile
    v-for="item in items"
    :key="item.title"
    @click="">
    <v-list-tile-content >
      <v-list-tile-title  v-html="item.title"></v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-icon :color="item.active ? 'blue lighten-1' : 'grey'">{{item.icone}}</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</v-list>
</v-flex>
</template>

<script lang="js">
  export default {
    data () {
      return {
        items: [
          { active: true, title: 'Mais Populares', icone: 'star'},
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

<style lang="postcss" scoped>
.v-list{
  padding: 0;
  margin-top: 10px;
}
.v-btn{
  border-radius: 50px;
}
.v-list__tile__title:hover{
  color: #42A5F5;
}

</style>

