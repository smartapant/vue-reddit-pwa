<template>
  <div class="comments-item">
    <v-icon color="black">chat</v-icon>
    <span>{{ comment.body }}</span>
    <div class="comments-reply" v-for="reply in comment.replies">
      <comments-item :comment="reply"></comments-item>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommentsItem',
    props: {
      comment: {
        type: Object,
        default: function () { return {} }
      }
    }
  }
</script>

<style>
  .comments-item {
    margin-top: 10px;
  }
  .comments-reply {
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    padding-left: 10px;
    padding-bottom: 10px;
  }
</style>
