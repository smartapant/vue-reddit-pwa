import http from './httpService'

const SearchApi = (() => {
  // const beautifyReplies = (comments) => {
  //   return comments.map(comment => {
  //     comment.replies = comment.replies ? comment.replies.data.children.map(reply => reply.data).filter(c => c.body) : [];
  //     this.beautifyReplies(comment.replies);
  //     return comment;
  //   })
  // }

  const subredditSearchResultsToSubreddits = response => {
    let subreddits = []
    if (response.data.data && response.data.data.children.length) {
      subreddits = response.data.data.children.map(c => c.data)
    }
    return subreddits
  }

  return {
    async searchSubreddits (query) {
      let response = await http.get(`search.json?q=${query}&type=sr`)
      return subredditSearchResultsToSubreddits(response)
    }
  }
})()

export default SearchApi
