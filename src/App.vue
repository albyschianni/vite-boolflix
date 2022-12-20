<script >
import { store } from './store.js';
import MovieCall from './components/MovieCall.vue';


export default{
  name:"App",
  components:{
    
    MovieCall
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
  
  <MovieCall />

</template>

<style lang="scss">
@use './style/general.scss';

</style>
