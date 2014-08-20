
var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server('.');

var port = process.env.PORT || 5000;
var excluded = ['partials', 'img', 'js', 'css', 'robots.txt', 'favicon.ico'];

var http = require('http');

http.createServer(function (req, res) {

  var tokens = req.url.split('/'), first = tokens[1];
  if(excluded.indexOf(first) < 0) {
    return fileServer.serveFile('/index.html', 200, {}, req, res);
  }

  fileServer.serve(req, res);

})
.listen(port, function () {
  console.log('Server started on ' + port);
});
