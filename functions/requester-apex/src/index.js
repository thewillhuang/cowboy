
import axios from 'axios'
import λ from 'apex.js'

export default λ(e => {
  return Promise.all(e.urls.map(async url => {
    console.log('fetching %s', url)
    return {
      status: (await axios.get(url)).status,
      url
    }
  }))
})
