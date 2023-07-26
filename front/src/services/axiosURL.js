import axios from 'axios'

export const axiosURL = axios.create({
    baseURL: "http://localhost:8080/app"
})