<template>
  <div class="page-index">
    <v-container fluid >
      <v-layout row wrap>
        <v-flex xs0 sm0 md3 class="pa-3">
          <BlogOptionsLeft/>
        </v-flex>
        <v-flex xs12 sm12 md8 class="pt-5">
         <v-card flat>Aline
            <v-btn small flat outline color="pink">
              DevOps
            </v-btn>
            <v-btn icon>
              <v-icon>mdi </v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import BlogOptionsLeft from "~/components/BlogOptionsLeft"
export default {
  components: { BlogOptionsLeft },
  data () {
    return {
      items: [ 'HOME', 'TUTORIAIS', 'SCRIPTS', 'PROJETOS', 'EQUIPE', 'CONTATO']
    }
  }
}
</script>
<style scoped>
.theme--light.v-toolbar {
  background-color: transparent;
}
.theme--light.v-toolbar:hover {
  background-color: #ECEFF1;
}
.v-btn{
  border-radius: 50px;
}
>>>>>>> 567a27403204f924fed73fed3936f35027a1ba81
</style>
