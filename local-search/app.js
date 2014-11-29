var querystring = require('querystring'),
    search = require('./lib/search.js'),
    telnet_server = require('./lib/server-telnet.js'),
    http_server = require('./lib/server-http.js')
    repl = require('repl');

// run search.pre = querystring.escape for urls
search.pre = querystring.escape;

http_server.listen(search, 80, "0.0.0.0");
