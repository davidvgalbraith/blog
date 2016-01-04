var ChildProcess = require('child_process');

var process = ChildProcess.spawn('echo', ['hello']);

process.stdout.on('data', function(datum) {
    console.log('received datum: ', datum.toString());
});
