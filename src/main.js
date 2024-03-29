// import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import { configRouter } from './route-config'

class Native {
  constructor() {
    this.router = null // needs hook-up from user
  }
}

window.Native = new Native()

Vue.use(require('vue-resource'))
// install router
Vue.use(VueRouter)
Vue.use(VueTouch)

// create router
const router = window.Native.router = new VueRouter({
  // history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend(require('./app.vue'))
router.start(App, '#vuestart')
