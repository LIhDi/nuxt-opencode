<template>
  <li class="blog">
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
      <v-card  id="card-um" flat :color="blog.color" class="pt-3">
        <v-chip class="ml-3" color="white" :text-color="blog.color">{{blog.tipo}}</v-chip>
        <v-chip color="white" :text-color="blog.color">{{blog.autor}}</v-chip>
        <v-chip color="white" :text-color="blog.color">{{blog.tecnologia}}</v-chip>
        <v-responsive class="text-xs-center">
          <br/>
            <ImageResponsive
                :imageURL="`blog/post1/docker.png`"
                :classes="'cardThumbnail'"/>
        </v-responsive>
        <v-card color="white" class="text-xs-left pt-2">
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
  border-radius: 100px;
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 1;
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
    background-image: radial-gradient(deepskyblue 45%, dodgerblue 80%);
  }
</style>
