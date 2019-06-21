<template>
  <div>
    <v-toolbar height="45" card tabs>
      <v-flex class="hidden-xs-only" sm10 md10>
        <v-layout align-center justify-space-around>
        <v-flex  xs12 sm12 md12>
          <v-btn @mouseover="showByIndex = true" @mouseout="showByIndex = null" v-for="item in menuItems" :to="item.url" :key="item.title" flat class="caption">{{item.title}}</v-btn>
        </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="hidden-xs-only" sm2 md2>
        <v-btn icon small outline class="white pink--text"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 white pink--text"><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 white pink--text"><v-icon>mdi-git</v-icon></v-btn>
        <LangSwitcher/>
      </v-flex>
      <v-tabs class="hidden-sm-and-up" color="transparent">
        <v-toolbar-side-icon @click.stop="toggleDrawer" class="white pink--text" outline flat></v-toolbar-side-icon>
        <v-tab >HOME </v-tab>
      </v-tabs>
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
            { title: 'SCRIPTS', icone: '', url:'/teste'},
            { title: 'PROJETOS', icone: '', url:'/65'},
            { title: 'EQUIPE', icone: '', url:'/5656'},
            { title: 'CONTATO', icone: '', url:'/5756'}
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
</style>
