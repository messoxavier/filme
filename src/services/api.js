import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=d88abfbb36d782cc05e38288561800a5&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
}

);

export default api;
