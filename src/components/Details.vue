<template>
    <div class="row">
        <div class="col s3 m6">
        <ul class="collection with-header">
            <li class="collection-header"><h5>{{title}}</h5></li>
            <li class="collection-item">Season: {{season}}</li>
            <li class="collection-item">Network: {{network}}</li>
            <li class="collection-item">Is current: {{isCurrent}}</li>
            <li class="collection-item">Genres:{{genres}}</li>
        </ul>
        <router-link v-bind:to="{ path: `/` }"> BACK </router-link>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase';

//importamos datos de una serie
export default {
    name: 'Details',
    data() {
        return {
            shows: [],
            title: '',
            season: 0,
            network: '',
            isCurrent: true,
            genres: '',
        }
    },
    //acá llamo a mi base de datos
    mounted() {
        db.collection("shows").doc(this.$route.params.id).get()
        .then(datos => {
            const Show = datos.data();
            this.title = Show.title;
            this.season = Show.season;
            this.network = Show.network;
            this.isCurrent = Show.isCurrent,
            this.genres = Show.genres, 
            console.log(datos.data)
        });
        
    },
    firestore() {         
    return {
      shows: db.collection('shows')
    }
  },   
    
}
</script>