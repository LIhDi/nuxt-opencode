<template>
  <div class="layout">
    <Menu class="menu-fixo" />
    <nuxt class="nuxt-content pos-menu-fixo" />
    <!-- <Footer class="pos-menu-fixo" /> -->
  </div>
</template>
<script>
import Menu from '~/components/Sections/Menu'
import Footer from '~/components/Sections/Footer'
export default {
  components: { Menu, Footer }
}
</script>
<style lang="scss" >
.layout {
  //sdisplay: flex;
  //flex-direction: column;
  //min-height: 100vh;
}
.nuxt-content {
  background: white;
  flex-grow: 1;
}
.menu-fixo {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.pos-menu-fixo {
  margin-top: 45px;
}
</style>
