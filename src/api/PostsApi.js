import http from './httpService'

const RedditApi = (() => {
  const beautifyReplies = (comments) => {
    return comments.map(comment => {
      comment.replies = comment.replies ? comment.replies.data.children.map(reply => reply.data).filter(c => c.body) : []
      beautifyReplies(comment.replies)
      return comment
    })
  }

  const redditCollectionToPosts = (response) => {
    return response.data.data.children.map(c => c.data)
  }

  return {
    async fetchPostsFromSubreddit (subreddit) {
      let response = await http.get(`${subreddit}.json`)
      return redditCollectionToPosts(response)
    },

    async fetchComments (post) {
      let response = await http.get(`${post.permalink}.json`)
      const editedComments = response.data.map(res => res.data.children.map(c => c.data).filter(c => c.body))
        .map(beautifyReplies.bind(this))
      return editedComments[1]
    },

    async fetchMorePosts (prevPost, subreddit) {
      let response = await http.get(`${subreddit}.json?count=25&after=${prevPost.name}`)
      return redditCollectionToPosts(response)
    }
  }
})()

export default RedditApi
