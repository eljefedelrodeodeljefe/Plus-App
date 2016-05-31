<template>
  <div class="auth-container">

    <nav class="role">
      <label class="artist" v-on:click="setActiveTab" data-role="artist" v-bind:class="{'isActive': activeTab === 'artist'}">Artist</label>
      <label class="agent" v-on:click="setActiveTab" data-role="agent" v-bind:class="{'isActive': activeTab === 'artist'}">Agent</label>
    </nav>

    <section class="auth-content artist" v-show="(activeTab == 'artist' || !activeTab) ?  true : false" class="panel content">
      <img src="img/icon@2x.png" alt="plus icon" class="login plus-icon" />
      <h1>Login</h1>
      <p>
        {{welcomeText}}
      </p>
      <div class="input">
        <label for="username_or_email">username or email</label>
        <input type="text" id="username_or_email" v-model="authData.username_or_email" placeholder="">

        <label for="password">password</label>
        <input type="password" id="password" v-model="authData.password">
        <label class="bottom" v-on:click="submit">Login</label>
      </div>
      <span>  or <a class="main-menu-container" v-link="'register'">
          <label class="register-button">Register</label>
        </a></span>
    </section>

    <section class="auth-content agent" v-show="(activeTab == 'agent') ?  true : false" class="panel content">
      <img src="img/icon@2x.png" alt="plus icon" class="login plus-icon" />
      <h1>Login</h1>
      <p>
        {{welcomeText}}
      </p>
      <div class="input">
        <label for="username_or_email">username or email</label>
        <input type="text" id="username_or_email" v-model="authData.username_or_email" placeholder="">

        <label for="password">password</label>
        <input type="password" id="password" v-model="authData.password">
        <label class="bottom" v-on:click="submit">Login</label>
      </div>
      <span>  or <a class="main-menu-container" v-link="'register'">
          <label class="register-button">Register</label>
        </a></span>
    </section>
  </div>

</template>

<script>
const http = require("http")

function submitLogin (data, cb) {
  const options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': '3000',
    'path': '/login',
    'headers': {
      'content-type': 'application/json'
    }
  }

  const req = http.request(options, function (res) {
    const chunks = []

    res.on('data', function (chunk) {
      chunks.push(chunk)
    })

    res.on('end', function () {
      const body = Buffer.concat(chunks)
      return cb(null, body)
    })

    res.on('error', function (err) {
      return cb(err)
    })
  })


  req.write(JSON.stringify({username: data.username_or_email, password: data.password}))
  req.end()
}



export default {
  data () {
    return {
      welcomeText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      activeTab: 'artist',
      authData: {
        username_or_email: null,
        password: null
      }
    }
  },
  methods: {
    setActiveTab: function (event) {
      this.activeTab = event.target.dataset.role

      let selected = document.querySelector('.active_tab')
      if (selected) {
        selected.classList.remove('active_tab');
      }

      document.querySelector('section.' + this.activeTab).className += ' active_tab'
    },
    submit: function () {
      console.log(this.authData.username_or_email)
      console.log(this.authData.password)
      submitLogin(this.authData, (err, data) => {
        if (err) {
          console.log(err)
        }
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
div.auth-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

div.auth-container > nav.role {
  display: flex;
  flex-direction: row;
  height: 3em;
}
div.auth-container > nav.role > label {
  width: 50%;
  text-align: center;
  line-height: 3em;
  border-color: rgba(215, 215, 215, 1);
  border-width: thin;
  border-style: solid;
  border-radius: 0.1em;
}

div.auth-container > nav.role > label.artist {
  background-color: rgba(134, 237, 255, 1);
  margin-left: 0.1em;
  margin-right: 0.05em;
}

div.auth-container > nav.role > label.agent {
  background-color: rgba(238, 134, 255, 1);
  margin-right: 0.1em;
  margin-left: 0.05em;
}

section.auth-content {
  z-index: 2;
  box-shadow: 0 -0.3em 0.3em 0 rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  text-align: center;
  padding-top: 3em;
}

section.auth-content.artist {
  background: rgba(0, 125, 255, 1);
}
section.auth-content.agent {
  background: rgba(4, 46, 89, 1);
}

section.auth-content h1 {
  color: rgba(235, 235, 235, 1);;
  font-size: 2em;
  margin-bottom: 0.3em;
  margin-top: 0.8em;
}

section.auth-content p {
  color: white;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  text-align: left;
  font-size: 0.7em;
}

img.login.plus-icon {
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  height: 6em;
  box-shadow: 0.2em 0.2em 0.5em 0 rgba(255,255,255,.44);
}

div.input {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
}
div.input > label {
  margin-top: 0.6em;
  font-size: 0.8em;
  color: rgba(187, 187, 187, 0.8);
}

div.input > input[type=text], div.input > input[type=password] {
  width: 100%;
  padding: 0.7em 1em;
  display: inline-block;
  border: thin solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

div.input > label.bottom {
  text-align: center;
  line-height: 2.5em;
  color: white;
  margin-top: 0.5em;
  width: 100%;
  background-color: rgba(123, 214, 31, 1);
  height: 2.5em;
}

label.isActive {
  z-index: 3;
}


</style>
