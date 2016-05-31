const http = require("http")

module.exports = function submitRegister (data, cb) {
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
