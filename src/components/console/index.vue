
<template>
  <article class="console">
    <ul class="console-output-container">
      <li v-for="msg in history">
        <!--{{ $index }} {{ msg.timestamp }}--> <span v-bind:class="msg.type">{{ msg.item }}</span>
      </li>
    </ul>
    <div class="console-input-container">
      <input class="console-input" v-on:keyup.enter="submit()" type="text" v-model="input" placeholder="edit me">
    </div>
  </article>
</template>

<script>
  const Duplex = require('stream').Duplex

  module.exports = {
    components: {},
    data: function () {
      return {
        history: [],
        input: null, // is mutated by input,
        child: null,
        stdin: null
      }
    },
    watch: {
      "input": function(o, n) {

      }
    },
    methods: {
      'submit': function () {
        this.history.push({timestamp: Date.now(), item: this.input, type: 'stdin'})
        this.child.stdin.write(`${this.input}\n`)
        this.input = '' // erases the dispatched message from input field
      }
    },
    ready() {

    }
  }
</script>

<style scoped>
.console-output-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  background-color: #1b1d23;
  margin: 0;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0.5em;
}

ul.console-output-container > li {
  line-height: normal;
  padding-left: 0.5em;
}
ul.console-input-container {
  width: 100%;
  overflow-y: scroll;
}

input.console-input {
  border-radius: 3px;
  height: 27px;
  line-height: 1em;
  padding: 0;
  width: 100%;
  background-color: #1b1d23;
}

article.console {
  color: white;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}

span.stdin {
  color: rgba(227, 227, 227, 1);
}
span.stdout {
  color: rgba(180, 180, 180, 1);
}
</style>
