import axios from 'axios'

const httpService = axios.create({
  baseURL: 'https://www.reddit.com'
})

export default httpService
