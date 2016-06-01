<template>
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
  <!-- <div class="modal-mask" v-show="show" transition="modal">
    <label class="modal-default-button"
      @click="show = false" v-on:click="resetBodyScroll">
      &#x2715;
    </label>
    <div class="modal-header">
      <h1 name="header">
        {{artist.name}}
      </h1>
    </div>

    <div class="modal-body">
      <section class="description">
        <div v-html="artist.description.html"></div>
      </section>
      <section class="images">
        <div class="images" v-for="image in artist.images" track-by="$index">
          <img v-bind:src="image"/>
        </div>
      </section>

    </div>

    <div class="modal-footer">
      <slot name="footer">
        default footer
      </slot>
    </div>
  </div> -->
</template>

<script>
  export default {
    methods: {
      resetBodyScroll: function () {
        document.querySelector('body').style.overflowY = ''
      }
    },
    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      artist: {
        type: Object,
        required: true,
        twoWay: true
      }
    },
    ready() {
      
    }
  }
</script>

<style>
section.images {
  width: 100%;
  display: flex;
  overflow-x: scroll;
}

section.images > div.images {

}

section.images > div.images > * {
  height: 10em;
  width: auto;
}

.modal-mask {
  overflow-y: scroll !important;
  /*-webkit-overflow-scrolling: touch;*/
}


</style>
