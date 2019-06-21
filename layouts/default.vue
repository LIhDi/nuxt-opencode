<template>
  <div class="layout">
    <Menu />
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>
<script>
import Menu from '~/components/Sections/Menu'
import Footer from '~/components/Sections/Footer'
</script>
<style lang="scss" >
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nuxt-content {
  background: white;
  flex-grow: 1;
}
</style>
