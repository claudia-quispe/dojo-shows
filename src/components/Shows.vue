<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <h4>TV Shows</h4>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Season</th>
              <th>Network</th>
              <th>Is Current</th>
              <th>Genres</th>
              <th>Actions</th>      
            </tr>
          </thead>
          <tbody>
            <tr v-for="show in shows" :key="show.id">
              <td><router-link :to="{path: '/details/' + show.id}">{{ show.title }}</router-link></td>
              <td>{{ show.season }}</td>
              <td>{{ show.network }}</td>
              <td>{{ show.isCurrent }}</td>
              <td><span v-for="(genre, i) in show.genres" :key="i">{{ genre }} </span></td>
              <td> 
                <router-link :to="{path: '/shows/' + show.id}"><i class="material-icons">edit</i></router-link>
              </td>
              <td>
                <a href="#" @click.prevent="delete_show(show.id)"><i class="material-icons">delete</i></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col s10 m10">
        <h5>Add a show</h5>
        <form @submit="add_show">
          <div class="input-field col s6 m6">
            <input type="text" required="required" class="validate" v-model="new_title">
            <label class="active" for="first_name2">Title</label>
          </div>
          <div class="input-field col s6 m6">
            <input type="text" required="required" class="validate" v-model="new_network">
            <label class="active" for="first_name2">Network</label>
          </div>
          <div class="input-field col s6 m6">
            <input type="text" required="required" class="validate" v-model="new_genres">
            <label class="active" for="first_name2">Genres</label>
          </div>
          <div class="input-field col s6 m6">
            <input type="number" required="required" class="validate" v-model="new_season">
            <label class="active" for="first_name2">Number of Seasons</label>
          </div>
        </form>
        <div class="row">
          <div class="col s6 m10">
            <p>Is current
            <label>
              <input class="with-gap" name="group1" value="yes" type="radio" v-model="isCurrent" />
              <span>Yes</span>
            </label>
            <label>
              <input class="with-gap" name="group1" value="no" type="radio" v-model="isCurrent" />
              <span>No</span>
            </label>
          </p>
          </div>
          <a type="submit" @click="add_show" class="waves-effect waves-light btn">Add</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'Shows',
  // acá van mis datos de Dojo shows
  data() {
    return {
      shows: [],
      title: '',
      season: 0,
      network: 0,
      isCurrent: true,
      genres: '',
      // elementos del formulario ADD SHOW
      new_title: '',
      new_genres: '',
      new_network: '',
      new_season: '',
    }
  },
  methods: {
    add_show() {
      db.collection('shows').add({
        title: this.new_title,
        season: parseInt(this.new_season),
        network: this.new_network,
        genres: this.new_genres.split(' ')
      });
      // acá limpiamos el formulario
      this.new_title = '';
      this.new_season = '';
      this.new_network = '';
      this.new_genres = '';
    },

    delete_show(id_shows) {
      console.log(id_shows);
      const respuesta = confirm('¿Desea eliminar este elemento?');
      if (respuesta == false) { return; }
      db.collection("shows").doc(id_shows).delete();

    }
  },
  // Esta función firestore vincula nuestro shows a la variable de shows contenida en los datos en tiempo real
  firestore() {         
    return {
      shows: db.collection('shows')
    }
  },
  //mounted() {
  //  console.log(this.shows)
  //},
}

</script>