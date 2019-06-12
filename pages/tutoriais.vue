<template>
  <div>
    <v-toolbar height="37" flat color="pink">
      <v-avatar size="100"></v-avatar>
      <v-spacer></v-spacer>
      <v-btn class="pink white--text" icon><v-icon>mdi-apps</v-icon></v-btn>
      <v-btn class="pink white--text" icon><v-icon>mdi-format-list-bulleted</v-icon></v-btn>
    </v-toolbar>
    <v-container fluid >
      <v-layout row wrap>
        <v-flex xs0 sm0 md3 class="pa-2 ml-4">
          <BlogOptionsLeft/>
        </v-flex>
        <v-flex xs12 sm12 md8 class="pt-4">
          <v-toolbar flat>
            <v-toolbar-title>
              <span class="subheading">Como instalar Docker no Ubuntu 18.04</span><br/>
              <span class="caption grey--text">Por: LihDi</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon class="mr-1 grey--text" small >mdi-comment-multiple</v-icon>
            <span class="mr-3 grey--text caption">256</span>
            <v-icon class="mr-1 grey--text" small>mdi-eye</v-icon>
            <span class="caption grey--text mr-2">15</span>
            <v-btn small class="caption" flat outline color="pink">
              DevOps
            </v-btn>
            
         </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import BlogOptionsLeft from "~/components/BlogOptionsLeft"
export default {
  components: { BlogOptionsLeft },
  data () {
    return {
      items: [ 'HOME', 'TUTORIAIS', 'SCRIPTS', 'PROJETOS', 'EQUIPE', 'CONTATO']
    }
  }
}
</script>
<style scoped>
.theme--light.v-toolbar {
  background-color: transparent;
}
.theme--light.v-toolbar:hover {
  background-color: #ECEFF1;
}
.v-btn{
  border-radius: 50px;
}
</style>
