'use strict'
const spawn = require('child_process').spawn
const util = require('util')
const Duplex = require('stream').Duplex
const Transform = require('stream').Transform
const EventEmitter = require('events');

class StdoutFilter extends Transform {
  constructor() {
    super()
  }

  _transform(data, encoding, cb) {
    // if (data.indexOf('lldb')) {
    //   this.push(data)
    // } else if (buf.indexOf('run')) {
    //   this.push(data)
    // } else {
    //   this.push(data)
    // }
    // if (data.indexOf('settings set -- target.run-args  "--perf-basic-prof" "lib/test.js"') > 0) {
    //   ee.emit('launched')
    // }
    this.push(data)

    return cb()
  };
}



module.exports.init = () => {
  return spawn('bash', []);
}

module.exports.StdoutFilter = () => { return new StdoutFilter() }
