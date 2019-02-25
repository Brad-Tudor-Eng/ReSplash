import axios from 'axios'

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: `Client-ID 39f6096362aeff39eac373789198e56d69120d181543941f5f132ea087dc632d`
      }
})