

<template>
  <article>
    <h1>Index</h1>
    <div v-html="hello"></div>
    <div class="grid">
          {{ articles }}
    </div>
  </article>
</template>

<script>
import hello from '../post/hello.md'
import axios from 'axios'
 export default {
   computed: {
      hello() {
        return hello
      }
    },
    async asyncData () {
    const {data} = await axios.get('https://api-opencode.herokuapp.com/posts')
    console.log('teste')
    return {articles:data}
  }
}
</script>

<style>

</style>
