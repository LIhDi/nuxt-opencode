<template>
  <div id="app" >
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md4>
          <v-card color="purple" dark>
            {{ lorem }}
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="indigo" dark>
                {{ lorem }}
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12 >
                  <v-card
                    color="red lighten-2"
                    dark>
                    {{ lorem }}
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
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
      showByIndex: null
    }
  }
}
</script>

