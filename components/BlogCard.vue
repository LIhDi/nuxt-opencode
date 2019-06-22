<template>
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug: blog.name }})">
      <v-card :max-height="altura" :height="altura">
         <v-card-title primary-title>
           <v-layout max-height="100" row wrap>
             <v-flex md2>
               <div  class="text-xs-center" style="border-right-style: solid; border-right-width: 1px; border-right-color: grey;" >
               <h1 class="caption-3 grey--text">16</h1>
               <span class="caption-1 grey--text">Junho</span><br/>
               <span class="caption-1 grey--text">2019</span>
               </div>
             </v-flex>
              <v-flex md8>
          <div>
            <h3 class="headline ml-2">Como instalar Docker no Ubuntu 18.04</h3>
          </div>
          </v-flex>
          <v-flex md2>
                  <v-avatar
          size="70"
          color="grey lighten-4"
        >
          <img src="../assets/images/blog/post1/_thumbnail.png" alt="avatar">
        </v-avatar>
        </v-flex>
           </v-layout>
        </v-card-title>
        <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
              </v-card-actions>
 

      </v-card>
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
