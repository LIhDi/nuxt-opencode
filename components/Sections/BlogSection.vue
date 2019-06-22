<template>
  <section>
    <ul class="blogs">
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog" />
    </ul>
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
<style lang="scss">
.blogs {
  margin: 0;

  @media (min-width: $screen-sm){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    display: grid;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>

