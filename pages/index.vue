<template>
  <div class="page-index">
    <v-container fluid >
      <v-layout row wrap>
        <v-flex xs0 sm0 md2 >
        </v-flex>
        <v-flex xs12 sm12 md8>
              <BlogSection :blogs="blogs"/>
        </v-flex>
        <v-flex xs0 sm0 md2>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import BlogSection from "~/components/Sections/BlogSection"
  import blogsEn from '~/contents/en/blogsEn.js'
  import blogsPt from '~/contents/pt/blogsPt.js'

  export default {
    components: { BlogSection },
    async asyncData ({app}) {
      const blogs = app.i18n.locale === 'en' ? blogsEn : blogsPt
      async function asyncImport (blogName) {
        const wholeMD = await import(`~/contents/${app.i18n.locale}/blog/${blogName}.md`)
        return wholeMD.attributes
      }
    return Promise.all(blogs.map(blog => asyncImport(blog)))
    .then((res) => {
      return {
        blogs: res
      }
    })
  },

  transition: { name: 'slide-fade' },

  computed: {
    ogImage: function () {
      return;
    }
  }
}
</script>
