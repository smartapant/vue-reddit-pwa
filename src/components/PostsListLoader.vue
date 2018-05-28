<template>
  <v-container class="posts-list-loader" fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-xs-center">
        <v-progress-circular :size="50" indeterminate color="primary"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'PostsListLoader'
  }
</script>

<style>

</style>
