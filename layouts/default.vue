<template>
  <div class="layout">
    <v-toolbar height="50" card tabs>
      <v-flex class="hidden-xs-only" sm10 md10>
        <v-tabs color="transparent" >
          <v-tab v-for="item in menuItems" :to="item.url" :key="item.title" ><v-btn flat class="caption transparent transparent">{{item.title}}</v-btn> </v-tab>
        </v-tabs>
      </v-flex>
      <v-flex class="hidden-xs-only" sm2 md2>
        <v-btn icon small outline class="white pink--text"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 white pink--text"><v-icon>mdi-instagram</v-icon></v-btn>
        <v-btn icon small outline class="ml-0 white pink--text"><v-icon>mdi-git</v-icon></v-btn>

      </v-flex>
        <v-tabs class="hidden-sm-and-up" color="transparent">
          <v-toolbar-side-icon @click.stop="toggleDrawer" class="white pink--text" outline flat></v-toolbar-side-icon>
          <v-tab >HOME </v-tab>
        </v-tabs>
      <!-- <LangSwitcher/> -->
    </v-toolbar>
    <v-navigation-drawer class="pink" width="350" v-model="drawer.open" app >
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
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Sections/Footer'
import LangSwitcher from '~/components/LangSwitcher'

export default {
  components: { Footer, LangSwitcher },
  data () {
    return {
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
          { title: 'SCRIPTS', icone: '', url:'/'},
          { title: 'PROJETOS', icone: '', url:'/'},
          { title: 'EQUIPE', icone: '', url:'/'},
          { title: 'CONTATO', icone: '', url:'/'}
        ],
      items: [ 'HOME', 'TUTORIAIS', 'SCRIPTS', 'PROJETOS', 'EQUIPE', 'CONTATO'],
      drawer: {
        open: false
    }
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

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nuxt-content {
  background: white;
  flex-grow: 1;
}
</style>
