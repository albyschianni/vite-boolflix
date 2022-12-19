<script >
import { store } from '../store.js';

export default{
    name:"SearchBar",
    data (){
        return{
            store,
        }
    }
}
</script>

<template>

    <section class="searchbar">
        <input type="text" v-model="store.searchText">
        <button @click="$emit('ricerca')">cerca</button>
    </section>

</template>

<style>
button {
    background-color: white;
    color: black;
}
</style>
