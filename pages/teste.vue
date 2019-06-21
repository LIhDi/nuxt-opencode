<template>
  <div>
      <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" xs4>
             teste
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

