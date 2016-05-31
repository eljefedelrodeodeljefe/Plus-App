// warning: vue-router requires Vue 0.12.10+
//
// document.addEventListener("deviceready", () => {
//   var push = PushNotification.init({ "android": {"senderID": "967143322463"},
//            "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
//
//       push.on('registration', function(data) {
//         console.log(data);
//       });
//
//       push.on('notification', function(data) {
//         console.log(data);
//           // data.message,
//           // data.title,
//           // data.count,
//           // data.sound,
//           // data.image,
//           // data.additionalData
//       });
//
//       push.on('error', function(e) {
//         console.log(e.message);
//           // e.message
//       });
// })



// import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'
import { configRouter } from './route-config'


Vue.use(require('vue-resource'))
// install router
Vue.use(VueRouter)
Vue.use(VueTouch)

// create router
const router = new VueRouter({
  // history: true,
  saveScrollPosition: true
})

// configure router
configRouter(router)

// boostrap the app
const App = Vue.extend(require('./app.vue'))
router.start(App, '#vuestart')
