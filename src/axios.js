import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api-halo.herokuapp.com"
})

export default instance