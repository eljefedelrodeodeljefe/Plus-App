var spawn = require('child_process').spawn
var child = spawn('bash', []);

child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
child.stdin.write('hello\n')
child.stdin.write('hello\n')
child.stdin.write('hello\n')
child.stdin.write('hello\n')
child.stdin.write('hello\n')



module.exports.init = () => {
  return child = spawn('bash', [], {stdio: ['ignore', 'pipe', 'pipe']});
}
