<template>
  <v-app>
    <v-flex id="opencode"></v-flex>
      <v-flex xs10 offset-xs1>
        <v-card id="container-secundario">
          <v-toolbar height="50px" card prominent>
            <Menu></Menu>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text style="height: 600px;"></v-card-text>
        </v-card>
      </v-flex>
  </v-app>
</template>

<script>
import Menu from './Menu.vue'
export default {
  components: {
    Menu
  },
  data() {
    return {
    }
  }
}
</script>
<style>
    #opencode{
    width:1605px;
    height: 250px;
    background: url(../../static/teste65.jpg);
    background-size:cover;
  }
  #container-secundario{
    margin-top: -64px;
  }
</style>
