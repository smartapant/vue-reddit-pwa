<template>
  <div class="comments-item">
    <div class="comments-reply" v-for="reply in comment.replies">
      <v-stepper vertical>
        <v-stepper-step editable step="1" complete>
          <div class="posts-list-item-metrics">
            <span>
              <span style="margin-right: 20px;">{{ comment.author }}</span>
              <v-icon>keyboard_arrow_up</v-icon> {{ comment.score }}
              <span style="margin-left: 20px;">{{timeAgo}}</span>
            </span>
          </div>
        </v-stepper-step>
        <v-stepper-content step="1">
          <span>{{ comment.body }}</span>
          <selected-post-comment :comment="reply"/>
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
  .comments-reply {
  }
</style>
