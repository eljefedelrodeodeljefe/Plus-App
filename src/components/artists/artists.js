const request = require('superagent')

module.exports = function getAllArtists(cb) {
  request
    .get('http://23.251.137.213/artists')
    // .withCredentials()
    .end(function(err, res){
      if (err) {
        console.log(err);
        return cb(err)
      }
      console.log(res.body);
      return cb(null, res.body)
    })
}
