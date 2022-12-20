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
            hover: false,
        }
    },
    computed: {
        votoArrotondato(){
            const voto = Math.ceil(this.info.vote_average / 2);
            return voto;
        }
    }
}
</script>

<template>
    <section class="card">
        <div>
            
            <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`">
            
            <div class="informazioni" >
                <h2><span style="color:#d11d19">Titolo:</span> {{ info.title || info.name }}</h2>
                <h3><span style="color:#d11d19">Titolo Originale:</span> {{ info.original_title || info.original_name}}</h3>

                <div class="flag-align" v-if="info.original_language === 'it' ">
                    <span style="color:#d11d19">Lingua:</span> 
                    <img class="flag" src="../assets/images/Ita-flag.svg.png" alt="">
                </div>
                <div class="flag-align" v-else-if="info.original_language === 'en' ">
                    <span style="color:#d11d19">Lingua:</span>  
                    <img class="flag" src="../assets/images/Eng-flag.jpeg" alt="">
                </div>
                <div class="flag-align" v-else-if="info.original_language === 'fr' ">
                    <span style="color:#d11d19">Lingua:</span>  
                    <img class="flag" src="../assets/images/Fra-flag.jpeg" alt="">
                </div>
                <div class="flag-align" v-else-if="info.original_language === 'es' ">
                    <span style="color:#d11d19">Lingua:</span> 
                    <img class="flag" src="../assets/images/Esp-flag.jpeg" alt="">
                </div>
                <div class="flag-align" v-else>
                    <span style="color:#d11d19">Lingua:</span>  
                    <img class="flag" src="../assets/images/world-flag.gif" alt="">
                </div>

                <div class="star">
                    <div><span style="color:#d11d19">Voto:</span> </div>
                    <div v-for="star in votoArrotondato">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </div>
                    <div v-for="star in 5 - votoArrotondato">
                     <font-awesome-icon icon="fa-regular fa-star" />
                    </div>
                </div>
                <div>
                    Overview: {{ info.overview }}
                </div>
            </div>
            
            
        </div>
        
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss';

.informazioni {
    display: none;
    
}
.card {
    width: calc((100% / 5) - 5px);
    min-height: 500px;
    position: relative;

    &:hover .informazioni{
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: 0.7);
        min-height: 562.5px;
        padding: 10px;
        color: white;
    }
    
}
.flag-align{
    display: flex;
    align-items: center;
}
.flag {
   width: 20px;
}
.star {
    display: flex;
    
}
.fa-star {
    color: yellow;
    display: flex;
}
img {
    width: 100%;
}


    

    

</style>
