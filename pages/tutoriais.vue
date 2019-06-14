<template>
  <div>
    <v-toolbar height="37" flat color="pink">
      <v-spacer></v-spacer>
      <v-btn class="pink white--text" icon><v-icon>mdi-apps</v-icon></v-btn>
      <v-btn class="pink white--text" icon><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
    </v-toolbar>
    <v-container fluid >
      <v-layout row wrap>
        <v-flex xs0 sm0 md3 class="pa-2 ml-4 hidden-xs-only">
          <BlogOptionsLeft/>
        </v-flex>
        <v-flex xs12 sm12 md8 class="pt-4">
          <v-toolbar :style="'border-color:'+post.color" v-for="post in ListTutoriais" :key="post.title" flat>
            <v-toolbar-title>
              <span class="subheading">{{post.title}}</span><br/>
              <span class="caption grey--text">Por: {{post.autor}}{{post.data}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="hidden-xs-only">
            <v-icon class="mr-2 grey--text" small >mdi-comment-multiple</v-icon>
            <span class="mr-3 grey--text caption">{{post.comentarios}}</span>
            <v-icon class="mr-1 grey--text" small>mdi-eye</v-icon>
            <span class="caption grey--text mr-2">{{post.visitados}}</span>
            <v-btn small class="caption" flat outline :color="post.color">
              {{post.tipo}}
            </v-btn>
            </div>
         </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import ListTutoriais from '~/contents/listTutoriais.js'
import BlogOptionsLeft from "~/components/BlogOptionsLeft"
export default {
  components: { BlogOptionsLeft },
  data () {
    return {
      ListTutoriais,
    }
  }
}
</script>
<style scoped>
.theme--light.v-toolbar {
  background-color: transparent;
}
.theme--light.v-toolbar:hover {
  background-color: #F5F5F5;
}
.v-btn{
  border-radius: 50px;
}
.v-toolbar{
  border-left-style: solid;
  border-left-width: 3px;
}
</style>
