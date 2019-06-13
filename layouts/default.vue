<template>
  <div class="layout">
    <v-toolbar height="50" card prominent tabs>
        <v-tabs class="hidden-xs-only" color="transparent" fixed-tabs >
          <v-tab v-for="item in items" to="/tutoriais" :key="item" >  {{ item }} </v-tab>
        </v-tabs>
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
          { active: true, title: 'Front-end', icone: ''},
          { active: true, title: 'Back-end', icone: ''},
          { title: 'Mobile', icone: ''},
          { title: 'DevOps', icone: ''},
          { title: 'Design', icone: ''},
          { title: 'Database', icone: ''},
          { title: 'API', icone: ''}
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

<style lang="scss">
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
.v-tabs__item {
  color:blue;
  font-size: 15px;
}
.v-tabs__item:hover {
  color:#F06292;
  font-size: 17px;
}
.v-dialog--fullscreen {
border-radius: 0;
margin: 0;
height: 100%;
position: fixed;
overflow-y: auto;
top: 100px; //Depending on the header height you want to show.
left: 0;
}


</style>
