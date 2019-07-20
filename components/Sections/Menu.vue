<template>
  <div>
    <v-toolbar class="menubar" height="45" card tabs>
      <v-layout row wrap>
      <v-flex class="hidden-xs-only" sm8 md10>
          <v-btn @mouseover="showByIndex = true" @mouseout="showByIndex = null" v-for="item in menuItems" :to="item.url" :key="item.title" flat class="caption white--text">
            {{item.title}}
          </v-btn>
      </v-flex>
      <v-flex class="show-md-and-up" sm4 md2>
        <v-btn icon small outline class="transparent white--text"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 transparent white--text"><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 transparent white--text"><v-icon>mdi-github-circle</v-icon></v-btn>
        <!--<LangSwitcher/>-->
      </v-flex>
      <v-tabs class="hidden-sm-and-up" color="transparent">
        <v-toolbar-side-icon @click.stop="toggleDrawer" class="transparent white--text" outline flat></v-toolbar-side-icon>
        <v-tab class="white--text font-weight-bold body-2">HOME </v-tab>
      </v-tabs>
      </v-layout>
    </v-toolbar>
    <v-navigation-drawer class="pink hidden-sm-and-up" width="450" v-model="drawer.open" app >
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs2 offset-xs10  >
            <v-btn class="transparent white--text" @click="toggleDrawer" flat icon><v-icon>mdi-close</v-icon></v-btn>
          </v-flex>
          <v-flex class="text-xs-center white--text  " xs12 v-for="options in menuOptions" :key="options.title" >
            <span class="title">{{options.title}}</span>
          </v-flex>
        </v-layout >
      </v-container>
    </v-navigation-drawer>
  </div>
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher'
export default {
  components: { LangSwitcher },
    data () {
      return {
        showByIndex: null,
        menuOptions: [
            { active: true, title: 'Front-end', icone: '', url:'/tutoriais'},
            { active: true, title: 'Back-end', icone: '', url:'/tutoriais'},
            { title: 'Mobile', icone: '', url:'/tutoriais'},
            { title: 'DevOps', icone: '', url:'/tutoriais'},
            { title: 'Design', icone: '', url:'/tutoriais'},
            { title: 'Database', icone: '', url:'/tutoriais'},
            { title: 'API', icone: '', url:'/tutoriais'}
          ],
          menuItems: [
            { title: 'HOME', icone: '', url:'/'},
            { title: 'TUTORIAIS', icone: '', url:'/tutoriais'},
            { title: 'SCRIPTS', icone: '', url:'/scripts'},
            { title: 'PROJETOS', icone: '', url:'/projetos'},
            { title: 'EQUIPE', icone: '', url:'/equipe'},
            { title: 'CONTATO', icone: '', url:'/contato'}
          ],
          items: [ 'pt', 'en'],
          drawer: { open: false }
      }
    },
  methods: {
    toggleDrawer () {
      this.drawer.open = !this.drawer.open
    }
  }
}
</script>
<style lang="scss" >
.v-navigation-drawer{
  opacity: 0.9;
}
.v-btn:before{
  color: transparent;
}
.v-btn__content:hover{
  color: #E91E63;
}
.menubar{
  background-image: linear-gradient(to right, rgba(241, 41, 108, 0.945), rgb(230, 148, 179));
}
.caption {
  color: white;
  font-weight: bold;
}
</style>
