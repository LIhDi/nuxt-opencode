<template>
  <div>
    <v-container fluid >
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 class="pa-3" >
          <nuxt-link :to="localePath('index')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 4" aria-hidden="true" style="width: 16px; transform: rotate(180deg);">
              <polygon fill="currentColor" points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"/>
            </svg>
            {{ $t('comeBack') }}
          </nuxt-link>
        </v-flex>
        <v-chip class="ml-3" color="grey" text-color="white">{{tipo}}</v-chip>
        <v-chip color="grey" text-color="white">{{tecnologia}}</v-chip>
        <v-flex xs12 sm12 md12 class="pa-3">
          <div class="elevate-cover__left">
            <span >{{ year }}</span>—
            <nuxt-link
              v-if="trans"
              v-for="(locale, i) in showLocales"
              :key="i"
              :to="`${locale.code == 'en' ? '' : '/' + locale.code}/blog/${trans}`">
              {{ $t('changeLanguagePost') }}
            </nuxt-link>
            <span v-else>{{ $t('soonLanguagePost') }}</span>
            <h1 class="elevate-cover__title">{{ title }}</h1>
            <p class="elevate-cover__description">{{ description }}</p>
          </div>
          <span class="subheading mr-2">por {{autor}}</span>
        </v-flex>
        <v-flex>
          <div class="container small">
            <DynamicMarkdown
              :render-func="renderFunc"
              :static-render-funcs="staticRenderFuncs"
              :extra-component="extraComponent" />
          </div>
          <Subscribe/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script lang="js">
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
  export default {
    async asyncData ({params, app}) {
      const fileContent = await import(`~/contents/${app.i18n.locale}/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        tempoLeitura: attr.tempoLeitura,
        name: params.slug,
        autor: attr.autor,
        tipo: attr.tipo,
        tecnologia: attr.tecnologia,
        title: attr.title,
        trans: attr.trans,
        year: attr.year,
        id: attr.id,
        owner: attr.owner,
        colors: attr.colors,
        role: attr.role,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        related: attr.related,
        extraComponent: attr.extraComponent,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    },

    nuxtI18n: {
      seo: false
    },

    components: { DynamicMarkdown},

    head () {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Aline Diogo" },
          { name: "description", property: "og:description", content: this.description, hid: "description" },
          { property: "og:title", content: this.pageTitle },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.description },
          { name: "twitter:image", content: this.ogImage }
        ],
        link: [
          this.hreflang
        ]
      };
    },

    transition: {
      name: 'slide-fade'
    },

    computed: {
      ogImage () {
        return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
      },
      pageTitle () {
        return this.title + ' – LihDi';
      },
      showLocales () {
        return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      },
      hreflang () {
        if (!this.trans) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.showLocales[0].iso,
          rel: 'alternate',
          href: `${process.env.baseUrl + (this.showLocales[0].code === 'en' ? '' : '/es')}/blog/${this.trans}`,
          hreflang: this.showLocales[0].code
        }
      },

      extraComponentLoader () {
        if (!this.extraComponent) {
          return null
        }
        return () => import(`~/components/blog/${this.extraComponent}.vue`)
      }
    }
  }
</script>

<style lang="scss">
.elevate-cover {
  min-height: 459px;

  &__left {
    max-width: 600px;
    width: 100%;
    padding: 2.4rem;
    margin-bottom: auto;
  }

  &__title {
    font-size: 3rem;
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: $secondary;

    @media (min-width: $screen-sm){
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove .5s ease;
    animation-delay: .5s;
    animation-fill-mode: forwards;
  }
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  color: $secondary;


  @media (min-width: $screen-sm){
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: $screen-sm){
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    color: $secondary;
    font-size: 14px;

    @media (min-width: $screen-sm){
      font-size: 16px;
    }
  }
}
</style>
