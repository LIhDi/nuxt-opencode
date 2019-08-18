<template>
  <section>
    <v-container fluid >
      <v-layout row wrap >
        <v-flex xs12 sm12 md12 class="pa-3 grey">
          <v-layout justify-center row wrap>
          <v-flex xs6 sm6 md6 class="transparent">
              <v-input
              class="white"
              rounded
                hide-details="true"
                append-icon="search"
                @click:append="appendIconCallback"
                @click:prepend="prependIconCallback">Tutoriais</v-input>
          </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12 md7 class="pa-3">
          <blog-card :altura="420" :blog="blogs[0]" />
        </v-flex>
        <v-flex xs12 sm12 md5 class="pa-3">
          <v-flex xs12 sm12 md12 >
            <blog-card :altura="200" :blog="blogs[1]" />
          </v-flex>
          <v-flex xs12 sm12 md12 class="pt-3 ">
            <blog-card :altura="200" :blog="blogs[2]" />
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import BlogCard from "~/components/home/BlogCard.vue";
export default {
  components: { BlogCard },
  props: {
    blogs: {
      type: Array
    }
  }
}
</script>


