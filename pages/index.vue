<template>
  <div class="page-index">
    <v-container fluid >
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md3 >
        </v-flex>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="white" >
          <v-card-title>
            <BlogSection :blogs="blogs"/>
          </v-card-title>
          </v-card>
        </v-flex>
          <v-flex d-flex xs12 sm6 md3>
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

    components: { BlogSection },

    transition: {
      name: 'slide-fade'
    },

    head () {
      return {
        title: this.$t('indexPageHead.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "LihDi" },
          { name: "description", property: "og:description", content: this.$t('indexPageHead.description'), hid: "description" },
          { property: "og:title", content: this.$t('indexPageHead.title') },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.$t('indexPageHead.description') },
          { name: "twitter:image", content: this.ogImage }
        ]
      };
    },

    computed: {
      ogImage: function () {
        return;
      }
    }
  }
</script>
