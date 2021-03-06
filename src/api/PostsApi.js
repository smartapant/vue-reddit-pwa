import http from './httpService'

const RedditApi = (() => {
  // const beautifyReplies = (comments) => {
  //   return comments.map(comment => {
  //     comment.replies = comment.replies ? comment.replies.data.children.map(reply => reply.data).filter(c => c.body) : [];
  //     this.beautifyReplies(comment.replies);
  //     return comment;
  //   })
  // }

  const redditCollectionToPosts = (response) => {
    return response.data.data.children.map(c => c.data)
  }

  return {
    async fetchPostsFromSubreddit (subreddit) {
      let response = await http.get(`${subreddit}.json`)
      return redditCollectionToPosts(response)
    },

    async fetchMorePosts (prevPost, subreddit) {
      let response = await http.get(`${subreddit}.json?count=25&after=${prevPost.name}`)
      return redditCollectionToPosts(response)
    }
  }
})()

export default RedditApi
