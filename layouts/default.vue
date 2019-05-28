<template>
  <div class="layout">
    <v-toolbar id="top" extended card prominent color="blue-grey lighten-1" tabs>
      <template v-slot:extension>
        <v-tabs dark color="transparent" fixed-tabs  slider-color="white">
          <v-tab v-for="item in items" :key="item" >  {{ item }} </v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <v-btn color="white" icon><v-icon>search</v-icon></v-btn>
      <v-btn color="white" icon><v-icon>apps</v-icon></v-btn>
      <LangSwitcher/>
    </v-toolbar>
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
      items: [ 'HOME', 'DEVOPS', 'LINUX', 'TEAM', 'CODE']
    }
  }
}
</script>

<style lang="scss">
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
  color:white;
  font-size: 15px;
}
.v-tabs__item:hover {
  color:white;
  font-size: 17px;
}
</style>
