<template>
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
        <v-img :height="altura" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-layout pa-2 column fill-height class="lightbox white--text">
            <v-flex shrink>
              <div class="caption-2">{{blog.title}}</div>
            </v-flex>
          </v-layout>
        </v-img>
    </nuxt-link>
</template>
<script lang="js">
  export default {
    props: {
      blog: { type: Object },
      altura: { type: Number}
    }
  }
</script>
<style lang="scss">
.cardThumbnail {
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 10;
    }
  }
  .cover-trigger{
    background: rgba(0,0,0,.25) url(../assets/image-gradient.png);
    display: block;
    z-index: 1;
  }
</style>
