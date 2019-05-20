<template>
  <v-app>
    <v-flex class="fixo">
      <v-flex id="opencode"></v-flex>
        <v-flex xs10 offset-xs1>
          <v-card id="container-secundario">
            <v-toolbar classheight="50px" card prominent color="transparent" tabs>
              <v-tabs  v-model="currentMenu" color="transparent"  fixed-tabs  slider-color="blue-grey lighten-1">
                    <v-tab v-for="item in items" :key="item" :href="'#tab-' + item" >  {{ item }} </v-tab>
              </v-tabs>
            </v-toolbar>
          <v-divider />
        </v-card>
      </v-flex>
    </v-flex>
    <v-flex xs10 offset-xs1 style="margin-top: 250px; margin-bottom: 20px;">
      <v-card>
        <v-card-text style="height: 1000px;">
          <nuxt />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-app>
</template>

<script>
import Menu from '../components/toolbar/Menu.vue'
export default {
  data () {
    return {
      items: [ 'HOME', 'DEVOPS', 'LINUX', 'TEAM', 'CODE'],
      teste: [ 1, 2, 3 ]
    }
  },
  components: { Menu }
}
</script>
<style>
  #opencode{
    width:1605px;
    height: 250px;
    margin: 0 auto;
    background-color: #42A5F5;
    background-size:cover;
  }
  .fixo {
    top: 0;
    width: 100%;
    height: 150px;
    z-index: 995;
    position: fixed;
    flex-direction: row;
  }
  #container-secundario{
    margin-top: -64px;
  }
  #container-terciario{
    display: block;
    margin-top: 0;
  }
</style>
