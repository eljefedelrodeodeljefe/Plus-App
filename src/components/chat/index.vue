<template>
  <ul class="pages">
    <li class="chat page">
      <div class="chatArea">
        <ul class="messages"></ul>
      </div>
    </li>
  </ul>
  <div class="engage">
    <input class="inputMessage" placeholder="Type here..."/>
    <div class="book" v-on:click="bookAction">Book now!</div>
  </div>

</template>

<script>
const io = require('socket.io-client')
export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {
    bookAction: function (key) {
      console.log('booking');
    }
  },
  ready () {
    var $messages = document.querySelector('.messages')// Messages area
    var $inputMessage = document.querySelector('.inputMessage') // Input message input box

    var username;
    var connected = false;
    var typing = false;
    var lastTypingTime;

    var socket = io('http://localhost:3000');

    function setUsername () {
      username = 'user'
      socket.emit('add user', username);
    }

    function sendMessage () {
      var message = $inputMessage.value;

      if (message && connected) {
        $inputMessage.value = '';
        addChatMessage(message);
        socket.emit('new message', message);
      }
    }

    function log (message, options) {
      addMessageElement(message, options);
    }

    function addChatMessage (data, options) {
      options = options || {};

      addMessageElement(data, options);
    }

    function addChatTyping (data) {
      data.typing = true;
      data.message = 'is typing';
      addChatMessage(data);
    }

    function addMessageElement (msg, options) {
      $messages.insertAdjacentHTML('afterBegin', '<li>' + '<b>' +'user' + Math.floor(Math.random() * 100) + '</b>: ' + msg + '</li>');
    }


    window.addEventListener('keydown', function (event) {
      if (!(event.ctrlKey || event.metaKey || event.altKey)) {

      }

      if (event.which === 13) {
        if (username) {
          sendMessage();
          socket.emit('stop typing');
          typing = false;
        } else {
          setUsername();
        }
      }
    });

    socket.on('login', function (data) {
      connected = true;
      var message = "Welcome to Socket.IO Chat – ";
      console.log(message, data);
    });

    socket.on('new message', function (data) {
      console.log(data);
    });

    socket.on('user joined', function (data) {
      console.log(data.username + ' joined');
    });

    socket.on('user left', function (data) {
      console.log(data.username + ' left');
    });

    socket.on('typing', function (data) {
      console.log(data);
    });

    socket.on('stop typing', function (data) {
      console.log(data);
    });
  }
}
</script>

<style scoped>


input {
  font-family:
  "HelveticaNeue-Light",
  "Helvetica Neue Light",
  "Helvetica Neue",
  Helvetica,
  Arial,
  "Lucida Grande",
  sans-serif;
}


ul {
  list-style: none;
  word-wrap: break-word;
}


.pages {
  display: flex;
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: flex-end;
}

.page {
  height: 100%;
  width: 100%;
}


.messages {
  font-size: 1em;
}

.inputMessage {
  font-size: 100%;
}

.log {
  color: gray;
  font-size: 1em;
  margin: 5px;
  text-align: center;
}

/* Messages */

.chatArea {
  height: 80%;
}

.messages {
  height: 100%;
  margin: 0;
  overflow-y: scroll;
}


.inputMessage {

  border: 10px solid rgba(255, 0, 0, 0.5);;
  height: 3em;
  outline: none;
  width: 100%;
}

div.engage {
    position: fixed;
    bottom: 0;
    width: 100%;
}

div.book {
  height: 3em;
  color: white;
  background-color: rgba(242, 51, 177, 1);
  text-align: center;
  line-height: 3em;
}


</style>
