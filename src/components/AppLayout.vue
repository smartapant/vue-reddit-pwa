<template>
  <v-app>
    <app-layout-sidebar
      :sidebar-shown-state="sidebarShownState"
      @sidebarStateChanged="onSidebarStateChanged"
    />
    <app-layout-navbar
      :sidebar-shown-state="sidebarShownState"
      @sidebarStateChanged="onSidebarStateChanged"
    />
    <app-layout-content>
      <router-view></router-view>
    </app-layout-content>
    <app-layout-footer/>
  </v-app>
</template>

<script>
  import AppLayoutSidebar from './AppLayoutSidebar.vue'
  import AppLayoutNavbar from './AppLayoutNavbar.vue'
  import AppLayoutFooter from './AppLayoutFooter.vue'
  import AppLayoutContent from './AppLayoutContent.vue'

  export default {
    name: 'AppLayout',
    components: {
      AppLayoutContent,
      AppLayoutSidebar,
      AppLayoutNavbar,
      AppLayoutFooter
    },
    data () {
      return {
        sidebarShownState: null
      }
    },
    methods: {
      onSidebarStateChanged (newState) {
        this.sidebarShownState = newState
      }
    }
  }
</script>

<style>

</style>
