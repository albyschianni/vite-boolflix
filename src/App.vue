<script >
import { store } from './store.js';

import SearchBar from './components/SearchBar.vue';


export default{
  name:"App",
  components:{
    SearchBar,
  },
  data(){
    return {
      store,
    }
  },
  methods: {

  }
}
</script>

<template>
  <SearchBar />
  
</template>

<style>

</style>
