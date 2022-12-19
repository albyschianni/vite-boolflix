import { reactive } from "vue"

export const store = reactive ({
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/movie/popular?api_key=e30918c867f1a554feb1b7817546c36f",
    apiKey: "e30918c867f1a554feb1b7817546c36f",
    searchVal: false,
    searchText:"",
});