<script >
import { store } from '../store.js';
import axios from "axios";
import SearchBar from './SearchBar.vue';

export default{
    name:"MovieCard",
    components: {
        SearchBar,
    },
    data (){
        return{
            store,
        }
    },
    methods:{
        callMovie(){
            let movieURL = store.apiURL;

            if (store.searchText != ""){
                movieURL += `https://api.themoviedb.org/3/search/movie?${store.apiKey}&query=${store.searchText}`
            }
            axios
            
            .get(movieURL)
            .then(res =>{
                store.movieList = res.data.results;
                console.log(store.movieList);
            });
        }
    }
}
</script>

<template>

    <SearchBar @ricerca="callMovie"/>

</template>

<style>

</style>
