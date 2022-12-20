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
            <h2>Titolo: {{ info.title || info.name }}</h2>
            <h3>Titolo Originale: {{ info.original_title || info.original_name}}</h3>

            <div v-if="info.original_language === 'it' ">
                Lingua: 
                <img class="flag" src="../assets/images/Ita-flag.svg.png" alt="">
            </div>
            <div v-else-if="info.original_language === 'en' ">
                Lingua: 
                <img class="flag" src="../assets/images/Eng-flag.jpeg" alt="">
            </div>
            <div v-else-if="info.original_language === 'fr' ">
                Lingua: 
                <img class="flag" src="../assets/images/Fra-flag.jpeg" alt="">
            </div>
            <div v-else-if="info.original_language === 'es' ">
                Lingua: 
                <img class="flag" src="../assets/images/Esp-flag.jpeg" alt="">
            </div>
            <div v-else>
                Lingua: 
                <img class="flag" src="../assets/images/world-flag.gif" alt="">
            </div>

            <div>Voto: {{ info.vote_average }}</div>
        </div>
        
    </section>
</template>

<style>
.flag {
   width: 30px;
}
</style>
