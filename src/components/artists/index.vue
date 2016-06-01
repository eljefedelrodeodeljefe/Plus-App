
<template>
  <header id="header"></header>
  <nav class="content pull request list">
    <div class="artistlist-container">
      <modal :show.sync="showModal_" :artist.sync="selected_artist"></modal>
      <nav class="filter">
        <label class="artist" v-on:click="setActiveTab" data-role="artist" v-bind:class="{'isActive': activeTab === 'artist'}">Artist</label>
        <label class="agent" v-on:click="setActiveTab" data-role="agent" v-bind:class="{'isActive': activeTab === 'agent'}">Agent</label>
      </nav>

      <section class="artistlist-content artist" v-show="(activeTab == 'artist' || !activeTab) ?  true : false" class="panel content">
        <div class="artist-cell" v-for="artist in artists" v-on:click="showModal(artist.artist_uuid)" data-artistuuid="{{artist.artist_uuid}}">
          <span> <img v-bind:src="artist.image" alt="{{ artist.name }}"/></span>
          <section>
            <h3>{{artist.name}}</h3>
            <label class="second-line"> <span>{{artist.categories}}</span><div>-</div><span class="cities"><span v-for="city in artist.available_in.cities">{{city}},</span></span></label>
          </section>
        </div>
      </section>
    </div>
  </nav>
</template>

<script>
const submitRegister = require('./submit')
const getAllArtists = require('./artists')


export default {
  components: {
    'styles': require('./styles/styles.vue'),
    'modale_styles': require('./styles/modal.vue'),
    'modal': require('./modal.vue')
  },
  data () {
    return {
      artists: [],
      showModal_: false,
      selected_artist: null
    }
  },
  methods: {
    showModal: function (id) {
      this.selected_artist = this.artists.find((artist) => {
        return artist.artist_uuid === id
      })
      console.log(this.selected_artist);
      this.showModal_ = true
    },
    submit: function () {
      submitRegister(this.authData, (err, data) => {
        if (err) {
          console.log(err)
        }
        console.log(data)
      })
    }
  },
  ready () {
    getAllArtists((err, res) => {
      if (err)
        console.log(err)

      this.artists = res
    })
  }
}
</script>

<style>

</style>
