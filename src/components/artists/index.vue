
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
  div.artistlist-container > nav.filter {
    position: absolute;
    z-index: 4;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 0, 0, 0.5);
    height: 2em;
  }

  section.artistlist-content.artist {

  }

  div.artist-cell {
    padding: 0.2em;
    padding-left: 1em;
    display: flex;
    justify-content: flex-start;
    margin-top: 0.12em;
    /*background-color: white;*/
    height: 4em;
    border-bottom-width: 0.1em;
    border-bottom-color: rgba(218, 218, 218, 0.5);
    border-bottom-style: solid;
  }
  div.artist-cell > span {
    height: 100%;
  }
  div.artist-cell > span > img {
    width: auto;
    height: 100%;
  }
  div.artist-cell > section {
    padding-left: 0.5em;
    text-align: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  div.artist-cell > section > h3 {
    font-size: 1em;
    padding: 0;
    margin: 0;
  }

  label.second-line {
    display: flex;
    flex-wrap: nowrap;
  }
  label.second-line > * {
    font-size: 0.8em;
    padding-right: 0.2em;
  }

  span.cities {
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
  }
  span.cities > * {
    font-style: italic;
    padding-right: 0.2em;
  }
</style>
