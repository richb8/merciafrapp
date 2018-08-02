import axios from 'axios'

export default {
  getGpxFile (url) {
    return axios.get(url)
  }
}
