<template>
    <div>
        <div class="row">
            <div class="col s10 m10">
                <h5>Edit show</h5>
                <form class="row" @submit.prevent="edit_show">
                    <div class="input-field col s12">
                        <input required="required" type="text" id="title" v-model="title" />
                        <label>Titulo: </label>
                    </div>
                    <div class="input-field col s12">
                        <input required="required" type="text" class="validate" id="season" v-model="season">
                        <label class="active" for="disabled">Season: </label>
                    </div>  
                    <div class="input-field col s12">
                        <input required="required" type="text" class="validate" v-model="network">
                        <label class="active" for="disabled">Network: </label>
                    </div>    
                    <div class="input-field col s12">
                        <input required="required" type="text" class="validate" v-model="genres">
                        <label class="active" for="disabled">Genre: </label>
                    </div>
                    <div class="input-field">
                        <button type="submit" class="btn" name="action ">UPDATE</button>
                    </div>
                </form>
            </div>
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
            </div>
        </div>  
    </div>
</template>

<script>
import { db } from '@/firebase';

export default {
    name: 'Edit',
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

    mounted() {
        db.collection("shows").doc(this.$route.params.id).get()
        .then(datos => {
            // aca capturamos datos
            const edit_show = datos.data();
            this.title = edit_show.title;
            this.season = edit_show.season;
            this.network = edit_show.network;
            this.isCurrent = edit_show.isCurrent ? 'yes' : 'no';
            this.genres = edit_show.genres; 
            console.log(edit_show)
        });   
    },
    methods: {
        edit_show() {
            db.collection("shows").doc(this.$route.params.id).update({
                title: this.title,
                season: this.season,
                network: this.network,
                isCurrent: this.isCurrent,
                genres: this.genres,
            })
            .then(() => {
                this.$router.push('/')
            })
        }
    }
}   
</script>