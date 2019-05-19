<template>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      height="50px">
      <Menu/>
    </v-toolbar>
</template>

<script>
import Menu from './Menu.vue'
export default {
  components: {
    Menu
},
data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
    }
  }
}
</script>

<style>

</style>
