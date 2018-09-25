<template>
  <div class="comments-item">
    <div class="comments-reply">
      <v-stepper vertical>
        <v-stepper-step editable step="index" complete>
          <div class="posts-list-item-metrics">
            <span>
              <span style="margin-right: 20px;">{{ comment.author }}</span>
              <v-icon>keyboard_arrow_up</v-icon> {{ comment.score }}
              <span style="margin-left: 20px;">{{ timeAgo }}</span>
            </span>
          </div>
        </v-stepper-step>
        <v-stepper-content step="index">
          <span v-linkified>{{ comment.body }}</span>
          <div v-for="reply in comment.replies">
            <selected-post-comment :comment="reply"/>
          </div>
        </v-stepper-content>
      </v-stepper>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'SelectedPostComment',
    props: {
      comment: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      timeAgo () {
        const date = new Date(parseInt(this.comment.created_utc, 10) * 1000)
        return moment(date).fromNow()
      }
    }
  }
</script>

<style>
  .comments-item {
    margin-top: 10px;
  }
</style>
