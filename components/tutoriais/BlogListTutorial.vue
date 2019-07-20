<template>
  <v-flex xs12 sm12 md8 class="pt-5">
    <v-card flat  >
        <v-container v-bind="{ [`grid-list-sm`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="post in ListTutoriais"
              :key="post.title"
              xs4>
              <v-card id="card" :style="`background:linear-gradient(10deg,#F8BBD0,#F8BBD0);`" :color="post.color" width="310px" height="210px" flat tile>
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
#card{
  border-radius: 10px;
}
</style>
