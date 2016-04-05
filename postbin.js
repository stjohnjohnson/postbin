#!/usr/bin/env node
var http = require('http');
var os = require('os');
var ifaces = os.networkInterfaces();
var port = parseInt(process.argv[2]);

if (isNaN(port)) {
    console.error('Usage: postbin.js PORT');
    process.exit(1);
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('\n\n');
    console.log('> ' + req.method + ' ' + req.url);
    console.log('> Headers: ');
    console.log(req.headers);
    req.on('data', function (data) {
        console.log('>> ' + data);
    });
    req.on('end', function () {
        console.log('>>> EOL');
    });
    res.end('');
}).listen(port);

Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return;
        }

        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, 'http://' + iface.address + ':' + port);
        } else {
            // this interface has only one ipv4 adress
            console.log(ifname, 'http://' + iface.address + ':' + port);
        }
        ++alias;
    });
});
