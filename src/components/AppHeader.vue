<script >
import { store } from '../store.js';

export default{
    name:"AppHeader",
    data (){
        return{
            store,
        }
    }
}
</script>

<template>
    <nav>
        <div class="netflix-feature">
            <h1>NETFLIX</h1>
            <div>Home</div>
            <div>Serie TV</div>
            <div>Film</div>
            <div>Originali</div>
            <div>Aggiunti di recente</div>
            <div>La mia lista</div>

        </div>
        
        <section class="searchbar">
            <input type="text" v-model="store.searchText">
            <button @click="$emit('ricerca')">Cerca</button>
        </section>
    </nav> 
    
</template>

<style lang="scss" scoped> 
button {
    background-color: white;
    color: black;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h1 {
    color: #d11d19;
    font-size: 50px;
    margin-right: 20px;
}
.netflix-feature {
    display: flex;
    color: white;
    gap: 20px;
    align-items: center;
    padding: 10px;
}
.searchbar {
    padding: 10px;
    margin-right: 20px;
}
.input {
    margin-right: 10px;
    width: 150px;
    border: 1px solid white;
    border-radius: 4px;
    padding-left: 3px;
    padding-top: 1px;
    padding-bottom: 1px;
}
button {
    background-color: #d11d19;
    color: black;
    border: none;
    padding: 3px;
    border-radius: 4px;
    font-weight: bold;
}
</style>
