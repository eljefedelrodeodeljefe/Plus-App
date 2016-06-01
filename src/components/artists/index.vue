
<template>
  <header id="header"></header>
  <div class="artistlist-container">
        <!-- <modal :show.sync="showModal_" :artist.sync="selected_artist"></modal> -->
    <nav class="filter">
      <label class="artist" v-on:click="setActiveTab" data-role="artist" v-bind:class="{'isActive': activeTab === 'artist'}">Artist</label>
      <label class="agent" v-on:click="setActiveTab" data-role="agent" v-bind:class="{'isActive': activeTab === 'agent'}">Agent</label>
    </nav>

    <section class="artistlist-content artist" v-show="(activeTab == 'artist' || !activeTab) ?  true : false" class="panel content">
      <!-- v-on:click="showModal(artist.artist_uuid)" -->
      <div class="artist-cell" v-for="artist in artists" v-on:click="simple(artist.artist_uuid)" data-artistuuid="{{artist.artist_uuid}}">
        <span> <img v-bind:src="artist.image" alt="{{ artist.name }}"/></span>
        <section>
          <h3>{{artist.name}}</h3>
          <label class="second-line"> <span>{{artist.categories}}</span><div>-</div><span class="cities"><span v-for="city in artist.available_in.cities">{{city}},</span></span></label>
        </section>
      </div>
    </section>
  </div>
  <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">×</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>      <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
    </div>
  </div>

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
      selected_artist: null,
      modal: null,
      span: null
    }
  },
  methods: {
    showModal: function (id) {
      this.selected_artist = this.artists.find((artist) => {
        return artist.artist_uuid === id
      })
      document.querySelector('section.body-container').style.overflowY = 'hidden'
      this.showModal_ = true
    },
    simple: function () {
      const self = this
      this.modal.style.display = 'block';
      document.querySelector('body').style.overflowY = 'hidden'
      document.querySelector('html').style.overflowY = 'hidden'
      document.querySelector('html').style.webkitOverflowScrolling = 'auto'
      document.querySelector('body').style.webkitOverflowScrolling = 'auto'

      this.span.onclick = function() {
          self.modal.style.display = 'none';
          document.querySelector('body').style.overflowY = ''
          document.querySelector('html').style.overflowY = ''
          document.querySelector('html').style.webkitOverflowScrolling = 'touch'
          document.querySelector('html').style.webkitOverflowScrolling = 'touch'
      }

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == self.modal) {
            self.modal.style.display = 'none';
        }
      }
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
    // fallback to body being scrollable if there is buggy behaviour
    document.querySelector('body').style.overflowY = ''
    document.querySelector('body').style.overflowY = ''
    document.querySelector('html').style.webkitOverflowScrolling = 'touch'
    document.querySelector('body').style.webkitOverflowScrolling = 'touch'

    this.modal = document.getElementById('myModal');
    this.span = document.getElementsByClassName('close')[0];

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
