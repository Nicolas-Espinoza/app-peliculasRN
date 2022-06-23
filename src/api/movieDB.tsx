import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c5f1f4799584dc4e4ae6d287124d97d6',
        languaje: 'en-US'
    }
})

export default movieDB;