<template>
  <div id="app">
    <div class="container">
    <div class="row">
      <div class="col s6 m6">
        <h3>TV Shows</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Season</th>
              <th>Network</th>
              <th>Is Current</th>
              <th>Genres</th>   
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in shows" :key="show.id">
              <td>{{ show.title }}</td>
              <td>{{ show.season }}</td>
              <td>{{ show.network }}</td>
              <td>{{ show.isCurrent }}</td>
              <td> <span v-for="(genre, i) in show.genres" :key="i">{{ genre }} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>         
  </div>
</template>

<script>
import { db } from '@/firebase'


export default {
  name: 'App',
  // acñá van mis datos propios
  data() {
    return {
      shows: [],
      title: '',
      season: 0,
      network: 0,
      isCurrent: true,
      genres: ''  
    }
  },
  // Esta función firestore vincula nuestro shows a la variable de shows contenida en los datos en tiempo real
  firestore() {         
    return {
      shows: db.collection('shows')
    }
  },
  mounted() {
    console.log(this.shows)
  },
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
