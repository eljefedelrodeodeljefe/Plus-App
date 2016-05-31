
<template>
  <nav class="content pull request list">
    <div class="auth-container">

      <nav class="role">
        <label class="artist" v-on:click="setActiveTab" data-role="artist" v-bind:class="{'isActive': activeTab === 'artist'}">Artist</label>
        <label class="agent" v-on:click="setActiveTab" data-role="agent" v-bind:class="{'isActive': activeTab === 'agent'}">Agent</label>
      </nav>

      <section class="auth-content artist" v-show="(activeTab == 'artist' || !activeTab) ?  true : false" class="panel content">
        <h1>Register</h1>
        <p>
          {{welcomeText}}
        </p>
        <div class="input">
          <input v-for="input in inputs"
                 type="{{ input.type }}"
                 placeholder="{{ input.placeholder }}"
                 v-model="authData[input.model_desc]"
                 class="{{input.has_break ? 'break': ''}}">
          <label class="bottom" v-on:click="submit">Register</label>
        </div>
        <span>  or <a class="main-menu-container" v-link="'login'">
            <label class="register-button">Login</label>
          </a>
        </span>
      </section>

      <section class="auth-content agent" v-show="(activeTab == 'agent') ?  true : false" class="panel content">
        <h1>Register</h1>
        <p>
          {{welcomeText}}
        </p>
        <div class="input">
          <input v-for="input in inputs"
                 type="{{ input.type }}"
                 placeholder="{{ input.placeholder }}"
                 v-model="authData[input.model_desc]"
                 class="{{input.has_break ? 'break': ''}}">
          <label class="bottom" v-on:click="submit">Register</label>
        </div>
        <span>  or <a class="main-menu-container" v-link="'login'">
            <label class="register-button">Login</label>
          </a>
        </span>
      </section>

    </div>

  </nav>
</template>

<script>
const http = require("http")

function submitRegister (data, cb) {
  const options = {
    'method': 'POST',
    'hostname': 'localhost',
    'port': '3000',
    'path': '/register',
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
  components: {
    'styles': require('./styles/styles.vue')
  },
  data () {
    return {
      welcomeText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
      activeTab: 'artist',
      authData: {
        username: null,
        first_name: null,
        lastname: null,
        name: null,
        email: null,
        telephone: {
          mobile: {
            number: null
          }
        },
        password: null
      },
      inputs: [
        {type: 'text', placeholder: 'username', model_desc: 'username'},
        {type: 'text', placeholder: 'name', model_desc: 'name'},
        {type: 'text', placeholder: 'first name', model_desc: 'first_name'},
        {type: 'text', placeholder: 'last name', model_desc: 'last_name', has_break: true},
        {type: 'text', placeholder: 'email', model_desc: 'email'},
        {type: 'text', placeholder: 'mobile number', model_desc: 'telephone.mobile.number', has_break: true},
        {type: 'password', placeholder: 'password', model_desc: 'password', has_break: true}
      ]
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
      submitRegister(this.authData, (err, data) => {
        if (err) {
          console.log(err)
        }
        console.log(data)
      })
    }
  }
}
</script>
