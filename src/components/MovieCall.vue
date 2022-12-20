<script >
import { store } from '../store.js';
import axios from "axios";
import SearchBar from './SearchBar.vue';
import MovieCard from './MovieCard.vue';

export default{
    name:"MovieCall",
    components: {
        SearchBar,
        MovieCard,
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
                movieURL = `https://api.themoviedb.org/3/search/multi?${store.apiKey}&query=${store.searchText}` 
                
            } 
            axios
            
            .get(movieURL)
            .then(res =>{
                store.movieList = res.data.results;
                console.log(store.movieList);
            });
        },
        
    }
}
</script>

<template>

    <SearchBar @ricerca="callMovie"/>

    <section>
        
        <MovieCard v-for="(film, index) in store.movieList" :key="index" :info="film"/>

    </section>
</template>

<style>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>
