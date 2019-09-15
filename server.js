var cfg = require('./server.cfg.json');
var server = require('./src/express/routes')(cfg);

server.listen(cfg.port, cfg.address, function () {
    console.log('Server listening on port ' + cfg.address + ':' + cfg.port + '!');
});