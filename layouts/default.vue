<template>
  <div class="layout">
      <v-toolbar classheight="50px" card prominent color="transparent" tabs>
        <v-tabs  color="transparent"  fixed-tabs  slider-color="blue-grey lighten-1">
          <v-tab v-for="item in items" :key="item" :href="'#tab-' + item" >  {{ item }} </v-tab>
      </v-tabs>
      </v-toolbar>
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from '~/components/Sections/Footer'

  export default {
    components: {
      Footer
    },
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
  flex-grow: 1;
}
</style>
