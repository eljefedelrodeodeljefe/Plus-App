
<template>
  <section class="foc-wrapper">
    <h2>Booking</h2>
    <h3>Terms of Service</h3>
    <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </p>
    <ol>
      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
      <li>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</li>
      <li>ur adipisicing elit, sed do eiusmod</li>
    </ol>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
    <div class="foc-engage">
      <div v-link="{ path: 'chat' }" class="foc-chat">Chat</div>
      <div v-link="{ path: 'book' }" class="foc-book">Book</div>
    </div>
  </section>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {

  },
  ready () {

  }
}
</script>

<style scoped>
h2 {
  margin-top: 2em;
}

div.foc-engage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 3em;
}

div.foc-engage > div {
  width: 50%;
  text-align: center;
  line-height: 3em;
}

div.foc-engage > div.foc-chat {
    background-color:rgba(140, 203, 197, 1)
}

div.foc-engage > div.foc-book {
  color: white;
  background-color: rgba(242, 51, 177, 1)
}

section.foc-wrapper {
  background-color: rgba(136, 136, 136, 0.13);
  padding-bottom: 0.5em;
}


</style>
