<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import Shows from './components/Shows.vue'

export default {
  name: 'App',
  // acá van mis datos propios
  data() {
    return {
     
    }
  },
  //mounted() {
  //  console.log(this.shows)
  //},
  components: {
  
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  margin: auto;
  display: block;
}

</style>
