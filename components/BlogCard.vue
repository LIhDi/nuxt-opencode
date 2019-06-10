<template>
  <li class="blog">
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
      <v-card id="card-um" flat :color="blog.color" class="pt-3">
        <v-chip float class="ml-3" color="white" :text-color="blog.color">{{blog.tipo}}</v-chip>
        <v-chip float color="white" :text-color="blog.color">{{blog.autor}}</v-chip>
        <v-chip float color="white" :text-color="blog.color">{{blog.tecnologia}}</v-chip>
        <v-responsive style="height: 210px;" class="text-xs-center">
          <ImageResponsive
            :imageURL="`blog/${blog.id}/_thumbnail.png`"
            :classes="'cardThumbnail'"/>
        </v-responsive>
          <v-card height="100" color="white" class="text-xs-left pt-2">
            <v-card-text>
              <span class="subheading grey--text">{{blog.title}}</span>
              <p class="heading grey--text">{{blog.year}}</p>
            </v-card-text>
          </v-card>
        </v-card>
    </nuxt-link>
  </li>
</template>
<script lang="js">
  export default {
    props: {
      blog: {
        type: Object
      }
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
  .blog {
    @media (min-width: $screen-sm){
      padding-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  #card-um{
    border-radius: 10px;
    //background-image: radial-gradient(deepskyblue 45%, dodgerblue 80%);
  }
</style>
