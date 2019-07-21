<template>
  <v-flex xs12 sm12 md8 class="pt-5">
    <v-card flat >
        <v-container v-bind="{ [`grid-list-sm`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="post in ListTutoriais"
              :key="post.title"
              xs4>
              <v-card flat class="text-xs-center pa-2 pink" id="card-um" width="310px" height="110px">
                <v-card-title >
                   <span class="headline white--text">{{post.title}}</span><br/>
                </v-card-title>
              </v-card>
              <v-card flat class="text-xs-center pa-2 grey lighten-4" id="card-dois" width="310px" height="150px">
              <v-card-text>
              </v-card-text>
              <v-card-actions class="mt-4">
                <v-btn block class="caption" flat outline :color="post.color">
                  {{post.tipo}}
                </v-btn>
              </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-flex>
</template>

<script>
import ListTutoriais from '~/contents/listTutoriais.js'
export default {
  data () {
    return {
      ListTutoriais
    }
  }
}
</script>

<style>
#card-um{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
#card-dois{
  border-bottom-left-radius:  10px;
  border-bottom-right-radius: 10px;
}
</style>
