const request = require('superagent')

module.exports = function getAllArtists(cb) {
  request
    .get('http://23.251.137.213/artists')
    .withCredentials()
    .end(function(err, res){
      if (err) {
        alert(err)
        return cb(err)
      }
      return cb(null, res.body)
    })
}
