<template>
  <v-toolbar
    app
    dark
    color="primary"
  >
    <v-toolbar-side-icon @click.stop="changeSidebarState"></v-toolbar-side-icon>
    <v-toolbar-title>Vue Reddit PWA</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'AppLayoutNavbar',
    props: {
      sidebarShownState: {
        type: Boolean,
        default: null
      }
    },
    methods: {
      changeSidebarState () {
        this.$emit('sidebarStateChanged', !this.sidebarShownState)
      }
    }
  }
</script>

<style>

</style>
