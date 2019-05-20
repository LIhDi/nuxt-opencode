<template>
  <v-layout row>
    <v-flex xs1>
      <v-btn flat large color="purple darken-3" to="/">HOME</v-btn>
    </v-flex>
    <v-flex v-for="i in subMenu" :key="`${i}`" xs1>
      <v-menu bottom open-on-hover offset-y >
        <template v-slot:activator="{ on }">
          <v-btn dark color="purple accent-1" flat v-on="on" style="font-size: 16px; margin-top: 10px;">
            {{i.descricao}}
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile class="tile" v-for="(item, index) in i.listaSubMenu" :key="index">
            <v-list-tile-content>
              <v-list-tile-title  large style="font-size: 12px" v-text="item"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider/>
        <v-list subheader three-line  >
            <v-btn dark flat>
              <nuxt-link to="/">Mais tópicos</nuxt-link>
            </v-btn>
        </v-list>
      </v-menu>
    </v-flex>
    <v-flex xs1>
      <v-btn color="purple darken-3" large flat to="/team">TEAM</v-btn>
    </v-flex>
    <v-flex xs1>
      <v-btn large color="purple darken-3" flat to="/ff">CONTATO</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      subMenu:[
        { listaSubMenu: [ 'DOCKER','JENKINS','KUBERNETES','HELM' ],
          descricao: 'DEVOPS',
          to: '/'
        },
        { listaSubMenu: [ 'JAVA','GOLANG','JAVASCRIPT','VUE' ],
          descricao: 'CODE',
          to: '/'
        },
        { listaSubMenu: [ 'UBUNTU','CENTOS','DEEPIN' ],
          descricao: 'LINUX',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style>
.nuxt-link-active{
    text-decoration: none;
    color: #1A237E;
  }
.v-list{
    width: 200px;
  }
  .tile{
    margin: 1px;
  }
  .tile:hover {
    background: #FCE4EC;
  }
a:link {
  text-decoration: none;
    color: #1A237E;
}
a:visited {
  text-decoration: none;
    color: #1A237E;
}
.v-btn:before {
  height: 50px;
}
.v-btn{
  margin-bottom: 12px;
}
</style>
