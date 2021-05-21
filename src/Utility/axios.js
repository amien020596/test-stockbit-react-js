import axios from 'axios';
const instanceAxios = axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apikey: "faf7e5bb"
  },
})

export default instanceAxios;