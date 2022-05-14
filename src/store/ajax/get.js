import axios from 'axios'

export default async function
get (url, config = null) {
  if (config === null) { config = {} }
  config.header = {
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
    'X-RapidAPI-Key': '9893694da0msh69f3fff9063bfe6p1d1906jsndbecc5187a6f',
    AuthJWT: localStorage.getItem('userToken')
  }

  return new Promise((resolve, reject) => {
    axios.get(url, config)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
