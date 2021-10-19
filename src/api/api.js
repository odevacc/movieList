import axios from "axios";

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/list_movies.json'
})

export const movieList = {
    getMovie(limit, page) {
        return instance.get(`?${limit && 'limit=' + limit}${page && '&page=' + page}`)
    }
}