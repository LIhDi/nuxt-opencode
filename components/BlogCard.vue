<template>
  <li class="blog">
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
      <v-flex xs12>
        <v-card align-center id="card-post-um" :color="blog.color" class="white--text">
          <v-chip color="secondary" text-color="blue">{{blog.tipo}}</v-chip>
          <v-card-title>
            <ImageResponsive
            :imageURL="`blog/${blog.id}/_thumbnail.svg`"
            :classes="'cardThumbnail'"
            :width="'115'"
            :height="'115'"
            :alt="blog.cardAlt" />
          </v-card-title>
            <div class="headline">{{blog.title}}</div>
        </v-card>
      </v-flex>
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
  margin-left: 90px;
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
  #card-post-dois{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .v-card__actions:hover{
    background: #039BE5;
    transition: all ease .20s;
  }
  #card-post-um{
    padding: 10px;
    border-radius: 15px;
    height: 300px;
  }
</style>
