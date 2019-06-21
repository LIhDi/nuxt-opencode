<template>
  <select v-model="selected" @change="changeLocale()" class="lang-switcher">
    <option :value="selected" selected>{{ $i18n.locale }}</option>
    <option v-for="locale in $i18n.locales" v-if="locale.code !== $i18n.locale" :key="locale.code" >
      {{ locale.code }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeLocale () {
      this.$router.push(this.switchLocalePath(this.selected));
    }
  }
}
</script>
<style lang="scss">
select {
  font-size: 14px;
  border-radius: 0;
  color: #E91E63;
  padding: 1rem 3rem 1rem 1rem;
  appearance: none;
  background-size: 12px;
  background-position: calc(100% - 1rem) center;
  background-repeat: no-repeat;
  text-transform: uppercase;
  transition: border-color .3s;
  cursor: pointer;


  &:focus {
    outline: none;
  }
}
</style>
