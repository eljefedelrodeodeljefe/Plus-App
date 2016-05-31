<template>
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">

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
            <button class="modal-default-button"
              @click="show = false">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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

</style>
