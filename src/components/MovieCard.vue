<script >
import { store } from '../store.js';

export default{
    name:"MovieCard",
    props: {
        info: Object,
    },
    data (){
        return{
            store,
        }
    },
    
}
</script>

<template>

    
    <section>
    
        <div class="card">
            
            <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`">
            <h2>Titolo: {{ info.title }}</h2>
            <h3>Titolo Originale: {{ info.original_title }}</h3>
            <div>Lingua: "{{ info.original_language }}"</div>
            <div>Voto: {{ info.vote_average }}</div>
        </div>
        
    </section>
</template>

<style>
.card {
   
}
</style>
